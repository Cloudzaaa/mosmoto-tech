$(document).ready(function(){
    //burger menu
    $('.navbar-burger').mouseup(function (e) {
        $(".navbar-menu").toggleClass('active');
    });

    //slider home page
    $('.moto-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true,
        appendDots: $('.moto-slider-nav'),
    });

});