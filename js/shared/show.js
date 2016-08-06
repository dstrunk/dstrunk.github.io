$(function() {
  $(window).on('load', function() {

    var paginationleftwidth = parseInt($('.pagination__static--left').outerWidth(),10);
    var paginationrightwidth = parseInt($('.pagination__static--right').outerWidth(),10);

    var left = paginationleftwidth-70;
    var right = paginationrightwidth-70;

    $('.pagination__static--left')
      .css({marginLeft: '-'+ left +'px'})
      .removeClass('hidden');
    $('.pagination__static--right')
      .css({marginRight: '-'+ right + 'px'})
      .removeClass('hidden');

  });
});
