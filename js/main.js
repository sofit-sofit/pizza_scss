$(function(){

    $('.slider').slick({
        infinite: true,
        fade: true,
        speed: 500,
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.menu-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
        responsive: [
            {
              breakpoint: 951,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
                breakpoint: 591,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
                }
              },
          ]
    });

    $('.pizzaburger-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
        responsive: [
            {
              breakpoint: 1006,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
                breakpoint: 736,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false
                }
            },
            {
                breakpoint: 501,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
                }
            },
          ]
    });


    $('.reviews__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
        responsive: [
            {
              breakpoint: 1006,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
                breakpoint: 591,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
                }
            },
          ]
    });

    $(".reviews__star").rateYo({
        starWidth: "22px",
        rating: 3.6,
        ratedFill: "#FFE55C",
        spacing: "3px"
      });

      $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('input').styler();


    new WOW().init();

    $('.menu-btn').on('click', function(){
      $('.header-line__inner').toggleClass('active')
    });
 


});