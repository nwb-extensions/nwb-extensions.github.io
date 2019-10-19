---
layout: null
excluded_in_search: true
---

(function () {
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1),
            vars = query.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20')).trim();
            }
        }
    }

    function getPreview(query, content, previewLength) {
        if (!content) {
          content = ''
        }
        previewLength = previewLength || (content.length * 2);

        var parts = query.split(" ");
        var match = content.toLowerCase().indexOf(query.toLowerCase());
        var matchLength = query.length;
        var preview;

        // Find a relevant location in content
        for (var i = 0; i < parts.length; i++) {
            if (match >= 0) {
                break;
            }

            match = content.toLowerCase().indexOf(parts[i].toLowerCase());
            matchLength = parts[i].length;
        }

        // Create preview
        if (match >= 0) {
            var start = match - (previewLength / 2);
            var end = start > 0 ? match + matchLength + (previewLength / 2) : previewLength;

            preview = content.substring(start, end).trim();

            if (start > 0) {
                preview = "..." + preview;
            }

            if (end < content.length) {
                preview = preview + "...";
            }

            // Highlight query parts
            preview = preview.replace(new RegExp("(" + parts.join("|") + ")", "gi"), "<strong>$1</strong>");
        } else {
            // Use start of content if no match found
            preview = content.substring(0, previewLength).trim() + (content.length > previewLength ? "..." : "");
        }

        return preview;
    }

    function buildResultHtml(item) {
      readmePreview = getPreview(query, item.readme, 300);
      if (item.maintainers) {
        maintainers = getPreview(query, item.maintainers.join(', '), 100);
      } else {
        maintainers = '';
      }
      resultHtml = "<li class='record'>" +
        "<h4><span class='ndx-name'><a href='" + item.src + "'>" + item.name + "</a></span></h4>" +
        "<p>" +
        "<span class='ndx-stats'>Version: " + item.version + "</span>" +
        "<span class='ndx-stats'><a href=\"" + item.pip + "\">PyPI project page</a></span>" +
        "<span class='ndx-stats'><a href=\"" + item.record_url + "\">Record repo</a></span>" +
        "<span class='ndx-stats'>License: " + item.license + "</span>" +
        "</p>" +
        "<p>Maintainers: " + maintainers + "</p>" +
        "<p>" + readmePreview + "</p></li>";
      return resultHtml;
    }

    function displaySearchResults(results, query) {
        var searchResultsEl = document.getElementById("search-results");
        var searchProcessEl = document.getElementById("search-process");
        var searchResultsCountEl = document.getElementById("search-results-count");
        var showAllEl = document.getElementById("show-all");
        var showAllCountEl = document.getElementById("show-all-count");

        if (!query) {  // no search, display all extensions
          var resultsHTML = "";
          count = 0;
          for (var key in window.data) {
              var item = window.data[key];
              resultsHTML += buildResultHtml(item);
              count += 1;
          };
          searchResultsEl.innerHTML = resultsHTML;
          searchProcessEl.style.display = "none";
          showAllEl.style.display = "inline";
          showAllCountEl.innerHTML = count.toString();
        } else {  // there are search results
            var resultsHTML = "";
            results.forEach(function (result) {
                var item = window.data[result.ref];
                resultsHTML += buildResultHtml(item);
            });
            searchResultsEl.innerHTML = resultsHTML;
            searchProcessEl.style.display = "inline";
            searchResultsCountEl.innerHTML = results.length.toString();
            showAllEl.style.display = "none";
        }
    }

    window.index = lunr(function () {
        this.ref("ref");
        this.field("name");
        this.field("license");
        this.field("maintainers");
        this.field("readme");

        for (var key in window.data) {
            this.add(window.data[key]);
        }
    });

    var query = decodeURIComponent((getQueryVariable("q") || "").replace(/\+/g, "%20"));
    var searchQueryEl = document.getElementById("search-query");
    searchQueryEl.innerText = query;

    displaySearchResults(window.index.search('*' + query + '*'), query); // Hand the results off to be displayed
})();
