$(document).ready(function() {
    // full page
    $(document).ready(function() {
        $('.fullpage').fullpage({
            anchors: ['section1', 'section2', 'section3', 'section4','section5', 'section6', 'section7', 'section8'],

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
            afterLoad: function(origin, destination, direction){
                var leavingSection = this;
        
                if(origin.index == 4 && direction =='down'){
                    $('.portfolio__title_img').addClass('portfolio-active');

                } else if(origin.index == 5 && direction =='up'){
                    $('.portfolio__title_img').removeClass('portfolio-active');
                }
            }
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
    $('.biz-video').click(function() {
        $('.popup-video-1').removeClass('hide-video-portfolio');
        $('.popup-video-1').addClass('show-video-portfolio');

        var video_data = $('.popup-video-1 iframe').data('src');
        $('.popup-video-1 iframe').attr('src', video_data);
    });
    //hide biz
    $('.close-popup-video').click(function() {
        $('.popup-video-1').removeClass('show-video-portfolio');
        $('.popup-video-1').addClass('hide-video-portfolio');

        $('.popup-video-1 iframe').attr('src', '');
    });

    $('.biz-video').mouseover(function() {
        $('.biz-video').css({'background-size': 'auto 120%'});
    });
    $('.biz-video').mouseout(function() {
        $('.biz-video').css({'background-size': 'auto 100%'});
    });

    //show pr
    $('.pr-video').click(function() {
        $('.popup-video-2').removeClass('hide-video-portfolio');
        $('.popup-video-2').addClass('show-video-portfolio');

        var video_data = $('.popup-video-2 iframe').data('src');
        $('.popup-video-2 iframe').attr('src', video_data);
    });
    //hide pr
    $('.close-popup-video').click(function() {
        $('.popup-video-2').removeClass('show-video-portfolio');
        $('.popup-video-2').addClass('hide-video-portfolio');

        $('.popup-video-2 iframe').attr('src', '');
    });

    $('.pr-video').mouseover(function() {
        $('.pr-video').css({'background-size': 'auto 120%'});
    });
    $('.pr-video').mouseout(function() {
        $('.pr-video').css({'background-size': 'auto 100%'});
    });

    //Gallery-popup biz
    // show
    $('.biz').click(function() {
        $('.popup-prj-1').removeClass('hide-gallery');
        $('.popup-prj-1').addClass('show-gallery');

        $(".project-popup__slider_img").get(0).slick.setPosition();
        $(".project-popup__slider_nav").get(0).slick.setPosition();
        $(".project-popup__info_slider").get(0).slick.setPosition();
        
    });
    // hide
    $('.close').click(function() {
        $('.popup-prj-1').removeClass('show-gallery');
        $('.popup-prj-1').addClass('hide-gallery');
    });

    $('.biz').mouseover(function() {
        $('.biz').css({'background-size': 'auto 120%'});
    });
    $('.biz').mouseout(function() {
        $('.biz').css({'background-size': 'auto 100%'});
    });

    //Gallery-popup pr
    // show
    $('.pr').click(function() {
        $('.popup-prj-2').removeClass('hide-gallery');
        $('.popup-prj-2').addClass('show-gallery');

        $(".project-popup__slider_img").get(1).slick.setPosition();
        $(".project-popup__slider_nav").get(1).slick.setPosition();
        $(".project-popup__info_slider").get(1).slick.setPosition();
    });
    // hide
    $('.close').click(function() {
        $('.popup-prj-2').removeClass('show-gallery');
        $('.popup-prj-2').addClass('hide-gallery');
    });

    $('.pr').mouseover(function() {
        $('.pr').css({'background-size': 'auto 120%'});
    });
    $('.pr').mouseout(function() {
        $('.pr').css({'background-size': 'auto 100%'});
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