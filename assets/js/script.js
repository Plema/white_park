$(document).ready(function() {

    // full page
    $(document).ready(function() {
        $('.fullpage').fullpage({
            scrollOverflow: true,
        });
    });
    
    //Slider for tents
    $(document).ready(function(){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            // variableWidth: true,
            responsive: [
                {
                    
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]

        });
        
    });

    // Slider kitchen
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: -30,
        slidesPerView: 1.5,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
        },
        roundLengths: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            414: {
                spaceBetween: -80,
            },
            768: {
                spaceBetween: -60,
            },
            1024: {
                spaceBetween: -440,
            },
            1280: {
                spaceBetween: -500,
            },
            1440: {
                spaceBetween: -580,
            },
            1600: {
                spaceBetween: -580,
            }
        }
    });

    //MAP
    $('.map-link').on('mouseenter', function(){
        var link = $(this).data('map');
        $('.' + link).removeClass('on');
        $('.' + link).addClass('yes');
    });
    
    $('.map-link').on('mouseleave', function(){
        var link = $(this).data('map');
        $('.' + link).removeClass('yes');
        $('.' + link).addClass('on');
    });
    
    
    /* // Show/hide nav
    $('.nav__toggle').on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        if ($('.nav__toggle').hasClass('active')) {
            $('.nav__toggle_btn').find('i').removeClass('icon-menu');
            $('.nav__toggle_btn').find('i').addClass('icon-close');
            $('.header__info').addClass('active');

            // for vertical menu
            $('.fixed').css({'width': '0'});
            $('.header').css({'width': '300px'});
            $('.header__info').css({'right': '0px'});
            $('.nav__toggle').toggle();

        } else {
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');
            $('.header__info').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var btn = $('.nav__toggle');
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            $('.nav__toggle').removeClass('active');
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');
            $('.header__info').removeClass('active');

            //for vertical menu
            $('.fixed').css({'width': '60px'});
            $('.header__info').css({'right': '-300px'});
            $('.nav__toggle').toggle();
        }
    }); */

    // Fixed header
    /* let header = $(".header");
    let container = $('.header__info');
    let introH = $('.intro').innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ){
            header.addClass("fixed");
            console.log('sdfsdfsd');
            // container.addClass('.hide__menu');
            // container.css({'right':'-300px'});

        } else{
            header.removeClass("fixed");
            // container.removeClass('.hide__menu');
            // container.css({'right':'0px'});
        }
    } */

    // Show/hide advantages
    $('.advantages__list_item').click(function(e) {
        e.preventDefault();

        $(this).find('.advantages__list_text').slideToggle(200,  "linear");
        $(this).find('.list__marker_outline').fadeToggle(200);
    });

    // Video-popup
    //show
    $('.intro__play').click(function() {
        $('.intro__play_outline').toggleClass('active');
        $('.header').fadeToggle(200);
        $('.video__popup').fadeToggle(200);

        var video_data = $('.video__popup iframe').data('src');
        $('.video__popup iframe').attr('src', video_data);
    });
    //hide
    $('.video__popup').click(function() {
        $('.video__popup').fadeToggle(200);
        $('.header').fadeToggle(200);
        $('.intro__play_outline').toggleClass('active');

        $('.video__popup iframe').attr('src', '');
    });

    // Height for gallery
    function windowSize(){
        if ($(window).width() >= '320'){
          var imgWidth = $('.portfolio__content_video, .portfolio__content_photo').width();
          $('.portfolio__content_video, .portfolio__content_photo').css({
            'height' : imgWidth
          });
        } else if ($(window).width() <= '767'){
    
        }
    }
    
    $(window).on('load resize',windowSize);

    // Mask for input-phone
    jQuery(function($){
        $(".input__phone").mask("+7 (999) 999-99-99");
    });
});