---
title: "NDX Catalog"
layout: default
sitemap: false
permalink: /catalog
---

## Explore the Neurodata Extensions Catalog

<form action="{{ site.url }}/catalog/" method="get">
    Filter: <input type="search" name="q" id="search-input" size="70" autofocus>
    <input type="submit" value="Search" style="display: none;">
</form>

<div style="margin-top:20px">
<p><span id="search-process" style="display: none">Showing <span id="search-results-count"></span> results for "<strong id="search-query"></strong>"</span><span id="show-all" style="display: none">Showing <span id="show-all-count"></span> extensions</span></p>
<ul id="search-results"></ul>

<script src="{{ site.url }}/js/lunr.min.js"></script>
<script src="{{ site.url }}/js/jquery-3.4.1.min.js" ></script>
<script src="{{ site.url }}/js/js-yaml.min.js" ></script>

<script>
(function() {
window.data = {}

function loadSearch() {
  var fileref = document.createElement('script')
  fileref.setAttribute("type", "text/javascript")
  fileref.setAttribute("src", "{{ site.baseurl }}/js/search.js")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

$.getJSON("https://api.github.com/orgs/{{ site.github_username }}/repos").done(function(data) {
  countTotal = 0
  $.each(data, function(key, recordJson) {
    if (recordJson.name.startsWith("{{ site.prefix }}") && recordJson.name.endsWith("{{ site.suffix }}") ) {
      countTotal += 1
    }
  });
  countLoaded = 0
  $.each(data, function(key, recordJson) {
    if (recordJson.name.startsWith("{{ site.prefix }}") && recordJson.name.endsWith("{{ site.suffix }}") ) {
      var resultJson = {}
      resultJson.ref = recordJson.name
      resultJson.record_url = recordJson.html_url
      resultJson.last_updated = recordJson.pushed_at
      window.data[recordJson.name] = resultJson

      var metaUrl = "https://api.github.com/repos/{{ site.github_username }}/" + recordJson.name + "/contents/ndx-meta.yaml"  
      $.getJSON(metaUrl).done(function(res, status) {
        if (status == "success") {
          metaJson = jsyaml.load(atob(res.content))
          for (k in metaJson) {
            window.data[recordJson.name][k] = metaJson[k]
          }
        }
        var readmeUrl = "https://api.github.com/repos/{{ site.github_username }}/" + recordJson.name + "/contents/README.md"
        $.getJSON(readmeUrl).done(function(res, status) {
          if (status == "success") {
            readmeText = atob(res.content)
            window.data[recordJson.name].readme = readmeText

            countLoaded += 1
            if (countLoaded == countTotal) {
              loadSearch()
            }
          }
        });
      });
    }
  });
});



})();

</script>

</div>
