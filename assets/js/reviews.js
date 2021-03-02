$(document).ready(function() {

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

        var video_data = $('.video__popup_rev iframe').data('src');
        $('.video__popup_rev iframe').attr('src', video_data);
    });
    //hide
    $('.close-popup-video').click(function() {
        $('.video__popup_reviews').removeClass('show-video-reviews');
        $('.video__popup_reviews').addClass('hide-video-reviews');

        $('.video__popup_rev iframe').attr('src', '');
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

    // Slider kitchen
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: -30,
        slidesPerView: 1.5,
        centeredSlides: true,
        speed: 300,
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
                spaceBetween: -500,
            },
            1920: {
                spaceBetween: -520,
            },
        }
    });
});