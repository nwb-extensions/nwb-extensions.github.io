"""
This script collects metadata and readme files from all ndx-*-record repositories in the nwb-extensions GitHub
organization. It retrieves the repository information, decodes the metadata and readme files, and saves the
collected data into a JSON file at `data/records.json`.

Usage:
  python -m pip install -r requirements.txt
  python utils/collect-records.py
"""
import os
import base64
import json
import yaml

import requests
import pandas as pd
from tqdm import tqdm
import warnings

# Define consts
API_URL = 'https://api.github.com'
GITHUB_USERNAME = 'nwb-extensions'
REPO_PREFIX = 'ndx-'
REPO_SUFFIX = '-record'

# Define path
OUTPUT_PATH = 'data/records.json'

# Define headers for API if needed
headers = dict()
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
if GITHUB_TOKEN is not None:
    print('Token found, will save in headers')
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"Bearer {GITHUB_TOKEN}",
    }

# Functions
def request(url_stem, url_leaf, tolerate=False, return_json=True, params=None):
    url = f'{API_URL}/{url_stem}/{GITHUB_USERNAME}/{url_leaf}'
    r = requests.get(url, headers=headers, params=params)
    success = r.status_code == 200
    if success:
        if return_json:
            return r.json()
        return r.content

    if tolerate:
        warnings.warn(f'Did not get success request at {url}')
        return dict()
    else:
        raise ValueError(f'Error at {url}')

def get_all_repos():
    """Get all repositories from the organization using pagination."""
    all_repos = []
    page = 1
    per_page = 100  # Maximum allowed by GitHub API

    while True:
        params = {'per_page': per_page, 'page': page}
        repos = request('orgs', 'repos', params=params)

        if not repos:  # Empty response means no more pages
            break

        all_repos.extend(repos)

        # If we got fewer repos than per_page, we've reached the last page
        if len(repos) < per_page:
            break

        page += 1

    print(f'Found {len(all_repos)} total repositories')
    return all_repos

def decode_content(d, k='content'):
    return base64.b64decode(d[k]).decode("utf-8")


# Get all ndx record repos
repos = get_all_repos()

rename_keys = {
    'name': 'ref',
    'html_url': 'record_url',
    'pushed_at': 'last_updated'
}

repo_data = (
    pd.DataFrame(repos)
    .query('name.str.startswith(@REPO_PREFIX) and name.str.endswith(@REPO_SUFFIX)')
    .rename(columns=rename_keys)
    .filter(list(rename_keys.values()))
    .drop_duplicates(subset='ref')
    .reset_index(drop=True)
)
repo_data['name'] = repo_data['ref']
repo_data = repo_data.set_index('name').to_dict('index')

# Get contents (meta & readme) of repos
for repo_name in tqdm(list(repo_data.keys())):

    # get metadata
    meta = request('repos', f'{repo_name}/contents/ndx-meta.yaml', tolerate=True)
    if len(meta) == 0:
        continue

    meta = yaml.safe_load(decode_content(meta))
    repo_data[repo_name].update(meta)

    # get readme
    readme = request('repos', f'{repo_name}/contents/README.md', tolerate=True)
    if len(readme) == 0:
        continue

    repo_data[repo_name].update({'readme': decode_content(readme)})

# Save data
with open(OUTPUT_PATH, 'w') as f:
    json.dump(repo_data, f)
