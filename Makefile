get-records: ## Get records data
	python utils/collect-records.py

serve: ## Serve and allow tracking changes to _config.yml with
	npx watchy -w _config.yml -- bundle exec jekyll serve --incremental --watch --livereload

cache-clean: ## Clean cache
	bundle exec jekyll clean

clean: # Clean
	rm -rf _site
	make cache-clean
