import $ from "jquery";
import 'slick-carousel';

$(document).ready(function($) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav',
        prevArrow: $('.profile-slider__prev'),
        nextArrow: $('.profile-slider__next'),
        afterChange(info) {
            console.log(info)
        }
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows:false,
        focusOnSelect: true
      });
      setTimeout(() => {
        let startBgImage = $('.slider-for').find('.slick-slide.slick-current img').attr('src');
        $('#profile-slider-bg').css({
          'background-image': `url(${startBgImage})`
        });
      }, 0)
      
      $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setTimeout(() => {
          let bgImage = $(this).find('.slick-slide.slick-current img').attr('src');
          $('#profile-slider-bg').css({
            'background-image': `url(${bgImage})`
          });
        },0)
       
      });
});