$(function() {
  $mobileIcon = $('a[data-application-nav-mobile-icon]');
  $header      = $('header[data-application-header]');

  $mobileIcon.on('click', function(e) {
    e.preventDefault();
    $header.toggleClass('active');
  });
});
