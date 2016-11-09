$(function() {
  $("#show-comments").on("click", function() {
    var disqusShortname = "danielstrunk";

    $.ajax({
      type: "GET",
      url: "//" + disqusShortname + ".disqus.com/embed.js",
      dataType: "script",
      cache: true
    });

    $(this).fadeOut();
  });
});
