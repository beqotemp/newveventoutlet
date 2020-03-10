import $ from "jquery";

$( document ).ready(function() {
    $('.catalog-select').click(function(){
    	$(this).toggleClass('show');
    });
    $('.navbar-burger').click(function(){
    	$('#menuBody').toggleClass('show');
    })
 	$('.catalog-filter__preview').click(function(){
    	$('.catalog-filter').toggleClass('show');
    })
    $('.catalog-filter__preview').click(function(){
        $('body').toggleClass('overflow');
    })
    $('.times-svg').click(function(){
    	$('.catalog-filter').toggleClass('show');
    })
    $('.times-svg').click(function(){
        $('body').toggleClass('overflow');
    })
    $('.navbar-general__profile-body').click(function(){
        $(this).toggleClass('show');
    })
    $('.form__select').click(function(){
        $(this).toggleClass('show');
    })
    
});