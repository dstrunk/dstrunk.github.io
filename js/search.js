
$(function() {
  window.__gcse = {
    callback: googleCSELoaded
  };

  function googleCSELoaded() {

    $("#search-button").on('click', function() {
      var searchText = $("#search-text").val();
      var element    = google.search.cse.element.getElement("searchOnlyCSE");
      element.execute(searchText);
      dataLayer.push({'event': 'searchSubmitted', 'formName': 'search', 'searchText': searchText});
    });

    $("#search-text").on('keyup', function(e) {
      if (e.keyCode == 13) {
        var searchText = $("#search-text").val();
        var element    = google.search.cse.element.getElement("searchOnlyCSE");
        element.execute(searchText);
        dataLayer.push({'event': 'searchSubmitted', 'formName': 'search', 'searchText': searchText});
      }
    });
  }

  (function() {
    var cx = '005588353414550359789:csnxl5bz9jw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
});
