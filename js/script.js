$(document).ready(function(){
  $('*').hide();
  $('*').fadeIn(1200);
  $('.wrapper-menu').click(function(){
    $('.wrapper-menu').toggleClass('flickr');
      $('.wrapper-menu').toggleClass('open');
    $('.wrapper-menu').removeClass('reverse');
    $('.navigation').removeClass('slideRight');


    $('.title>h1,h5').removeClass('titleReverse');
    $('.title>h1,h5').toggleClass('titleSlide');

    $('.wrapper-menu').toggleClass('rotate');
    $('.navigation').toggleClass('slideLeft');
    $('.wrapper-menu').click(function(){
        $('.wrapper-menu').toggleClass('reverse');
        $('.navigation').toggleClass('slideRight');
        $('.title>h1,h5').toggleClass('titleReverse');
    });
  });
});
