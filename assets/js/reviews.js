$(document).ready(function() {
    
    // Show/hide nav for another pages
    function showMenuLine() {
        $('.header__info_line').css({'right': '0px'});
    }
    function hideMenuLine() {
        $('.nav__toggle_line').css({'right': '0px'});
    }

    $('.nav__toggle_line').on("mouseenter", function(e) {
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

    $('.header__info_line').on('mouseleave', function(){
        setTimeout(hideMenuLine, 300);

        setTimeout(function(){
            $('.header__info_line').css({'right': '-300px'});
            $('.nav__toggle_line').removeClass('active');
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');

        }, 301);
    });

    // $(document).mouseup(function (e) {
    //     var btn = $('.nav__toggle_line');
    //     if (!btn.is(e.target) && btn.has(e.target).length === 0) {
    //         $('.header__info_line').css({'right': '-300px'});
    //         $('.nav__toggle_line').removeClass('active');
    //         $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
    //         $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

    //         setTimeout(hideMenuLine, 300);
    //     }
    // });

    $(window).scroll(function(){
        $('.header__info_line').css({'right': '-300px'});
        $('.nav__toggle_line').removeClass('active');
        $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
        $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

        hideMenuLine();
    });

    // placeholder
    $(document).ready(function() {
        $('.preloader').delay(400).fadeOut('slow');
    });
    // Video-popup intro
    //show intro
    $('.intro__play').click(function() {
        $('.intro__play_outline').toggleClass('active');
        $('.header').fadeToggle(200);
        $('.video__popup').removeClass('hide-video');
        $('.video__popup').addClass('show-video');

        var video_data = $('.video__popup iframe').data('src');
        $('.video__popup iframe').attr('src', video_data);
    });
    //hide intro
    $('.close-popup-video').click(function() {
        $('.video__popup').removeClass('show-video');
        $('.video__popup').addClass('hide-video');
        $('.header').fadeToggle(200);
        $('.intro__play_outline').toggleClass('active');

        $('.video__popup iframe').attr('src', '');
    });

    // Video-popup video-reviews
    //show
    $('.video__play_rev').click(function() {
        $('.video__popup_reviews').removeClass('hide-video-reviews');
        $('.video__popup_reviews').addClass('show-video-reviews');

        var video_data = $('.video__popup_reviews iframe').data('src');
        $('.video__popup_reviews iframe').attr('src', video_data);
    });
    //hide
    $('.close-popup-video').click(function() {
        $('.video__popup_reviews').removeClass('show-video-reviews');
        $('.video__popup_reviews').addClass('hide-video-reviews');

        $('.video__popup_reviews iframe').attr('src', '');
    });


    // slider-video
    $(document).ready(function(){
        $('.video__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
                }
            ]
        });
    });
    $(document).ready(function(){
        $('.video__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
                }
            ]
        });
    });

    // Swiper own
    const swiperOwn = new Swiper('.swiper-container-own', {
        spaceBetween: -30,
        slidesPerView: 1.5,
        centeredSlides: true,
        speed: 300,
        roundLengths: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                spaceBetween: -200,
            },
            1024: {
                spaceBetween: -310,
            },
            1280: {
                spaceBetween: -300,
            },
            1440: {
                spaceBetween: -200,
            },
            1600: {
                spaceBetween: -525,
            },
            1920: {
                spaceBetween: -525,
            },
        }
    });

    // Swiper doc
    const swiperDoc = new Swiper('.swiper-container-doc', {
        spaceBetween: -30,
        slidesPerView: 1.5,
        centeredSlides: true,
        speed: 300,
        roundLengths: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                spaceBetween: -200,
            },
            1024: {
                spaceBetween: -310,
            },
            1280: {
                spaceBetween: -300,
            },
            1440: {
                spaceBetween: -200,
            },
            1600: {
                spaceBetween: -525,
            },
            1920: {
                spaceBetween: -525,
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

    //Zayavka-popup
    // show footer
    $('.intro__btn').click(function() {
        $('.popup-app .app').removeClass('hide-app');
        $('.popup-app .app').addClass('show-app');
    });
    // hide footer
    $('.close-popup-app').click(function() {
        $('.popup-app .app').removeClass('show-app');
        $('.popup-app .app').addClass('hide-app');
    });

    //Thanks
    //show thanks
    $('.active-thanks').click(function() {
        $('.thanks').removeClass('hide-thanks');
        $('.thanks').addClass('show-thanks');
    });
    //hide thanks
    $('.close-popup-thanks').click(function() {
        $('.thanks').removeClass('show-thanks');
        $('.thanks').addClass('hide-thanks');

        $('.popup-app .app').removeClass('show-app');
        $('.popup-app .app').addClass('hide-app');

        $('.popup-zvonok .zvonok').removeClass('show-zvonok');
        $('.popup-zvonok .zvonok').addClass('hide-zvonok');

        $('.popup-estimate .estimate').removeClass('show-estimate');
        $('.popup-estimate .estimate').addClass('hide-estimate');
    });
});