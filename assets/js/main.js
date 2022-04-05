$('.intro').hide();
$('.promo__nojs').hide();

$(document).ready(function() {  
    function setBoundries(slick, state) {
      if (state === 'default') {
        slick.find('ul.promo__dots li').eq(4).addClass('n-small-1');
      }
    }
  
    // Slick Selector.
    var slickSlider = $('.promo__slider');
    var maxDots = 5;
    var transformXIntervalNext = -18;
    var transformXIntervalPrev = 18;
  
    slickSlider.on('init', function (event, slick) {
      $(this).find('ul.promo__dots').wrap("<div class='promo__dots-container'></div>");
      $(this).find('ul.promo__dots li').each(function (index) {
        $(this).addClass('dot-index-' + index);
      });
      $(this).find('ul.promo__dots').css('transform', 'translateX(0)');
      setBoundries($(this),'default');
    });
  
    var transformCount = 0;
    slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var totalCount = $(this).find('.promo__dots li').length;
      if (totalCount > maxDots) {
        if (nextSlide > currentSlide) {
          if ($(this).find('ul.promo__dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
            if (!$(this).find('ul.promo__dots li:last-child').hasClass('n-small-1')) {
              transformCount = transformCount + transformXIntervalNext;
              $(this).find('ul.promo__dots li.dot-index-' + nextSlide).removeClass('n-small-1');
              var nextSlidePlusOne = nextSlide + 1;
              $(this).find('ul.promo__dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
              $(this).find('ul.promo__dots').css('transform', 'translateX(' + transformCount + 'px)');
              var pPointer = nextSlide - 3;
              var pPointerMinusOne = pPointer - 1;
              $(this).find('ul.promo__dots li').eq(pPointerMinusOne).removeClass('p-small-1');
              $(this).find('ul.promo__dots li').eq(pPointer).addClass('p-small-1');
            }
          }
        }
        else {
          if ($(this).find('ul.promo__dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
            if (!$(this).find('ul.promo__dots li:first-child').hasClass('p-small-1')) {
              transformCount = transformCount + transformXIntervalPrev;
              $(this).find('ul.promo__dots li.dot-index-' + nextSlide).removeClass('p-small-1');
              var nextSlidePlusOne = nextSlide - 1;
              $(this).find('ul.promo__dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
              $(this).find('ul.promo__dots').css('transform', 'translateX(' + transformCount + 'px)');
              var nPointer = currentSlide + 3;
              var nPointerMinusOne = nPointer - 1;
              $(this).find('ul.promo__dots li').eq(nPointer).removeClass('n-small-1');
              $(this).find('ul.promo__dots li').eq(nPointerMinusOne).addClass('n-small-1');
            }
          }
        }
      }
    });
  
    $('.promo__slider').show().slick({
        infinite: false,
        variableWidth: true,
        dots: true,
        dotsClass: 'promo__dots',
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        prevArrow: "<span class='prev yellow hover-w'></span>",
        nextArrow: "<span class='next yellow hover-w'></span>",
    });
  });


$('.first-slider').show().slick({
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'ondemand',
    prevArrow: "<span class='prev hover-y'></span>",
    nextArrow: "<span class='next hover-y'></span>",
});
// $('.promo__slider').show().slick({
//     variableWidth: true,
//     infinity: false,
//     dots: true,
//     dotsClass: 'promo__dots',
//     slidesToShow: 1,
//     focusOnSelect: true,
//     slidesToScroll: 1,
//     lazyLoad: 'ondemand',
//     prevArrow: "<span class='prev yellow hover-w'></span>",
//     nextArrow: "<span class='next yellow hover-w'></span>",
// });

