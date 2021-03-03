$(document).ready(function() {
    // full page
    $(document).ready(function() {
        $('.fullpage').fullpage({
            scrollOverflow: true,
            responsiveWidth: 1024,
            onLeave: function(origin, destination, direction){
                var loadedSection = this;
        
                if($(window).width() >= 1024){
                    function showMenu() {
                        $('.header__info').css({'right': '0'});
                    }
                    function hideMenu() {
                        $('.nav__toggle').css({'right': '0'});
                    }

                    if(origin.index == 0 && direction =='down'){
                        $('.header__info').css({'right': '-300px'});
                    
                        setTimeout(hideMenu, 200);

                        $(window).click(function() {
                            if($('.nav__toggle').hasClass('active')){
                                $('.nav__toggle').css({'right': '-50px'});

                                setTimeout(showMenu, 200);
                            }
                        });
                        $(document).click(function (e) {
                            var btn = $('.nav__toggle');
                            if (!btn.is(e.target) && btn.has(e.target).length === 0) {
                                $('.header__info').css({'right': '-300px'});
                                $('.nav__toggle').removeClass('active');
                                $('.nav__toggle_btn').find('i').removeClass('icon-close');
                                $('.nav__toggle_btn').find('i').addClass('icon-menu');

                                setTimeout(hideMenu, 300);
                            }
                        });

                    } else if(origin.index == 1 && direction =='up'){
                        $('.nav__toggle').css({'right': '-50px'});
                        setTimeout(showMenu, 200);
                    }
                }
            },
        });
    });
    
    
    //Slider for tents
    $(document).ready(function(){
        $('.tent-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.tent__title_slider'
        });
        $('.tent__title_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.tent-slider',
            focusOnSelect: true,
            prevArrow: $('.prev-tent'),
            nextArrow: $('.next-tent'),
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

    //Slider for project 
    $(document).ready(function(){
        $('.project-popup__slider_img, .project-popup__info_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            fade: true,
            asNavFor: '.project-popup__slider_nav'
        });
        $('.project-popup__slider_nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.project-popup__slider_img, .project-popup__info_slider',
            focusOnSelect: true,
            infinite: true,
            arrow: true,
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

    // Slider kitchen
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: -20,
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
                spaceBetween: -60,
            },
            768: {
                spaceBetween: -60,
            },
            1024: {
                spaceBetween: -300,
            },
            1280: {
                spaceBetween: -350,
            },
            1440: {
                spaceBetween: -350,
            },
            1600: {
                spaceBetween: -500,
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
    
    
    // Show/hide nav on main
    $('.nav__toggle').on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        if ($('.nav__toggle').hasClass('active')) {
            $('.nav__toggle_btn').find('i').removeClass('icon-menu');
            $('.nav__toggle_btn').find('i').addClass('icon-close');
            $('.header__info').addClass('active');

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

    // Show/hide advantages
    $('.advantages__list_item').click(function() {
        //show
        if($(this).find('.advantages__list_text').hasClass('hide') && $(this).find('.advantages__list_text').hasClass('hide')){

            $('.advantages__list_text').slideUp(200).removeClass('show');
            $('.advantages__list_text').addClass('hide');
            $(this).find('.advantages__list_text').slideDown(200).removeClass('hide');
            $(this).find('.advantages__list_text').slideDown(200).addClass('show');

            $('.list__marker_outline').fadeOut(200).removeClass('show'); 
            $('.list__marker_outline').addClass('hide');
            $(this).find('.list__marker_outline').fadeIn(200).removeClass('hide');
            $(this).find('.list__marker_outline').fadeIn(200).addClass('show');

        } else if($(this).find('.advantages__list_text').hasClass('show') && $(this).find('.advantages__list_text').hasClass('show')){

            $(this).find('.advantages__list_text').slideUp(200).removeClass('show');
            $(this).find('.advantages__list_text').addClass('hide');

            $(this).find('.list__marker_outline').fadeOut(200).removeClass('show');
            $(this).find('.list__marker_outline').addClass('hide');
        }
    });

    // Video-popup
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

    // Video popup-portfolio
    //show biz
    $('.biz-video .portfolio__play').click(function() {
        $('.video__popup_portfolio').removeClass('hide-video-portfolio');
        $('.video__popup_portfolio').addClass('show-video-portfolio');

        var video_data = $('.video__popup_portfolio iframe').data('src');
        $('.video__popup_portfolio iframe').attr('src', video_data);
    });
    //hide biz
    $('.close-popup-video').click(function() {
        $('.video__popup_portfolio').removeClass('show-video-portfolio');
        $('.video__popup_portfolio').addClass('hide-video-portfolio');

        $('.video__popup_portfolio iframe').attr('src', '');
    });

    //show pr
    $('.pr-video .portfolio__play').click(function() {
        $('.video__popup_portfolio').removeClass('hide-video-portfolio');
        $('.video__popup_portfolio').addClass('show-video-portfolio');

        var video_data = $('.video__popup_portfolio iframe').data('src');
        $('.video__popup_portfolio iframe').attr('src', video_data);
    });
    //hide pr
    $('.close-popup-video').click(function() {
        $('.video__popup_portfolio').removeClass('show-video-portfolio');
        $('.video__popup_portfolio').addClass('hide-video-portfolio');

        $('.video__popup_portfolio iframe').attr('src', '');
    });

    //Gallery-popup biz
    // show
    $('.biz .portfolio__photo').click(function() {
        $('.project').removeClass('hide-gallery');
        $('.project').addClass('show-gallery');

        $(".project-popup__slider_img").slick('reinit');
        $(".project-popup__slider_nav").slick('reinit');
        $(".project-popup__info_slider").slick('reinit');
        
    });
    // hide
    $('.close').click(function() {
        $('.project').removeClass('show-gallery');
        $('.project').addClass('hide-gallery');
    });

    //Gallery-popup pr
    // show
    $('.pr .portfolio__photo').click(function() {
        $('.project').removeClass('hide-gallery');
        $('.project').addClass('show-gallery');

        $('.project-popup__slider_img').get(0).slick.setPosition();
        $('.project-popup__slider_nav').get(0).slick.setPosition();
        $('.project-popup__info_slider').get(0).slick.setPosition();
    });
    // hide
    $('.close').click(function() {
        $('.project').removeClass('show-gallery');
        $('.project').addClass('hide-gallery');
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


    //Zayavka-popup
    // show
    $('.footer__download').click(function() {
        $('.popup-app .app').removeClass('hide-app');
        $('.popup-app .app').addClass('show-app');
    });
    // hide
    $('.close-popup-app').click(function() {
        $('.popup-app .app').removeClass('show-app');
        $('.popup-app .app').addClass('hide-app');
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