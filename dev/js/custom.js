$(document).ready(function(){
    //burger menu
    $('.navbar-burger').mouseup(function (e) {
        $(".navbar-menu").toggleClass('active');
    });

    //slider home page
    if (document.querySelector('.moto-slider')) {
        $('.moto-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            dots: true,
            appendDots: $('.moto-slider-nav'),
        });
    }

    if (document.querySelector('.partner-slider')) {
        $('.partner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: true,
            prevArrow: $('.partner-slider-wrap__right-arrow'),
            nextArrow: $('.partner-slider-wrap__left-arrow'),
        });
    }

});