$(document).ready(function() {

    // placeholder
    $(document).ready(function() {
        $('.preloader').delay(400).fadeOut('slow');
    });
    
    // full page
    $(document).ready(function() {
        $('.fullpage').fullpage({
            scrollOverflow: true,
            responsiveWidth: 1024,
        });
    });

    //Slider for project
    $(document).ready(function(){
        $('.project__slider_img, .project__info_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            fade: true,
            asNavFor: '.project__slider_nav'
        });
        $('.project__slider_nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.project__slider_img, .project__info_slider',
            focusOnSelect: true,
            infinite: true,
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]

        });
    });

    //Slider for seating
    $(document).ready(function(){
        $('.seating__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            fade: true,
            asNavFor: '.seating__title_slider'
        });
        $('.seating__title_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.seating__slider',
            focusOnSelect: true,
            infinite: true,
            prevArrow: $('.prev-seat'),
            nextArrow: $('.next-seat'),
            
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
        spaceBetween: -120,
        slidesPerView: 1.5,
        centeredSlides: true,
        roundLengths: true,
        speed: 300,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1024: {
                spaceBetween: -350,
            },
            1280: {
                spaceBetween: -350,
            },
            1440: {
                spaceBetween: -350,
            },
            1600: {
                spaceBetween: -550,
            },
            1920: {
                spaceBetween: -550,
            },
        }
    });

    // Show/hide nav for another pages
    function showMenuLine() {
        $('.header__info_line').css({'right': '0px'});
    }
    function hideMenuLine() {
        $('.nav__toggle_line').css({'right': '0px'});
    }

    $('.nav__toggle_line').on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        if ($('.nav__toggle_line').hasClass('active')) {
            $('.nav__toggle_btn').find('i').removeClass('icon-menu');
            $('.nav__toggle_btn').find('i').addClass('icon-close');
            $('.header__info_line').addClass('active');

        } else {
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');
            $('.header__info_line').removeClass('active');
        }
        if($('.nav__toggle_line').hasClass('active')){
            $('.nav__toggle_line').css({'right': '-50px'});

            setTimeout(showMenuLine, 200);
        }
    });

    $(document).click(function (e) {
        var btn = $('.nav__toggle_line');
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            $('.header__info_line').css({'right': '-300px'});
            $('.nav__toggle_line').removeClass('active');
            $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

            setTimeout(hideMenuLine, 300);
        }
    });
    
    // Mask for input-phone
    jQuery(function($){
        $(".input__phone").mask("+7 (999) 999-99-99");
    });

    //Estimate-popup
    // show footer
    $('.footer__calc').click(function() {
        $('.popup-estimate .estimate').removeClass('hide-estimate');
        $('.popup-estimate .estimate').addClass('show-estimate');
    });
    // hide footer
    $('.close-popup-estimate').click(function() {
        $('.popup-estimate .estimate').removeClass('show-estimate');
        $('.popup-estimate .estimate').addClass('hide-estimate');
    });
    // show portfolio
    $('.portfolio__btn').click(function() {
        $('.popup-estimate .estimate').removeClass('hide-estimate');
        $('.popup-estimate .estimate').addClass('show-estimate');
    });
    // hide portfolio
    $('.close-popup-estimate').click(function() {
        $('.popup-estimate .estimate').removeClass('show-estimate');
        $('.popup-estimate .estimate').addClass('hide-estimate');
    });

    //Zvonok-popup
    // show footer
    $('.header__btn').click(function() {
        $('.popup-zvonok .zvonok').removeClass('hide-zvonok');
        $('.popup-zvonok .zvonok').addClass('show-zvonok');

    });
    // hide footer
    $('.close-popup-zvonok').click(function() {
        $('.popup-zvonok .zvonok').removeClass('show-zvonok');
        $('.popup-zvonok .zvonok').addClass('hide-zvonok');

    });
});