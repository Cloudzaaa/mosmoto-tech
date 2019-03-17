$(document).ready(function(){
    //burger menu
    $('.navbar-burger').mouseup(function (e) {
        $(".navbar-menu").toggleClass('active');
    });


    // $('.moto-slider').slick({
    //     dots: true,
    //     infinite: true,
    //     autoplaySpeed: 2000,
    // });

    $('.moto-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.moto-slider-nav-dots'),
        asNavFor: '.moto-slider-nav',
    });

    $('.moto-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.moto-slider-for',
        centerMode: true,
        focusOnSelect: true,
    });
});