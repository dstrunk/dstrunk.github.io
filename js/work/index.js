$(function() {
  $background = $('<div id="body-background"></div>');
  $('body').append($background);

  $.preload = function() {
    for (var i = 0; i < arguments.length; i++) {
      $("<img />").attr("src", arguments[i]);
    }
  }

  $('.summary-list__item--work').each(function() {
    $src = $(this).data('image');
    $.preload($src);
  });

  $('.summary-list__item--work').hover(function() {
    $image = $(this).data('image');
    $background.css({
      'background-image': 'url(' + $image + ')',
      'opacity': '0.2'
    });
  }, function() {
    $background.css({
      'background-image': 'transparent',
      'opacity': '0'
    });
  });
});
