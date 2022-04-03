$('.first-slider').slick({
    autoplay: true,
    lazyLoad: 'ondemand',
    prevArrow: "<span class='prev hover-y'></span>",
    nextArrow: "<span class='next hover-y'></span>",
});
$('.promo__slider').slick({
    infinite: true,
    variableWidth: true,
    centerPadding: '40px',
    dots: true,
    slidesToShow: 4,
    lazyLoad: 'ondemand',
    prevArrow: "<span class='prev hover-y'></span>",
    nextArrow: "<span class='next hover-y'></span>",
});