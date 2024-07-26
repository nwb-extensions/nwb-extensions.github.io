---
title: "NDX Catalog"
layout: default
excerpt: "NDX"
sitemap: false
permalink: /
---

<img alt="NDX Catalog Logo" src="images/ndx-logo-text.png" width="400" class="center-block">

The [Neurodata Extensions Catalog (NDX Catalog)](https://github.com/nwb-extensions) is a community-led catalog of extensions to the [Neurodata Without Borders (NWB)](https://neurodatawithoutborders.github.io/) data standard.

To create an NWB extension, please follow [this tutorial](https://nwb-overview.readthedocs.io/en/latest/extensions_tutorial/extensions_tutorial_home.html). To add an extension to this Catalog, follow the [instructions in the staged-extensions repo](https://github.com/nwb-extensions/staged-extensions).

<form action="{{ site.url }}" method="get">
    Filter: <input type="search" name="q" id="search-input" size="70" autofocus>
    <input type="submit" value="Search" style="display: none;">
</form>

<div style="margin-top:20px">
<p><span id="search-process" style="display: none">Showing <span id="search-results-count"></span> results for "<strong id="search-query"></strong>"</span><span id="show-all" style="display: none">Showing <span id="show-all-count"></span> extensions</span></p>
<ul id="search-results"></ul>

<script src="{{ site.url }}{{ site.baseurl }}/js/lunr.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/jquery-3.5.0.min.js" ></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/js-yaml.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js"></script>

<script>
(function() {

  function loadSearch() {
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", "{{ site.baseurl }}/js/search.js")
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }

  $.getJSON('{{ site.baseurl }}/data/records.json').done(function(data) {
    Object.keys(data).forEach(key=>{
      // add DOMPurify to sanitize parsed HTML, because marked doesn't sanitize
      data[key].readme = DOMPurify.sanitize(
        marked.parse(data[key].readme)
      );
      // data[key].pypi_version_badge = "https://img.shields.io/pypi/v/" + data[key].name;
    });
    window.data = data;
    loadSearch();
  });
})();
</script>

</div>
