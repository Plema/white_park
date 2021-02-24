$(document).ready(function() {

    // Video-popup intro
    //show
    $('.intro__play').click(function() {
        $('.intro__play_outline').toggleClass('active');
        $('.video__popup').fadeToggle(200);

        var video_data = $('.video__popup iframe').data('src');
        $('.video__popup iframe').attr('src', video_data);
    });
    //hide
    $('.video__popup').click(function() {
        $('.video__popup').fadeToggle(200);
        $('.intro__play_outline').toggleClass('active');

        $('.video__popup iframe').attr('src', '');
    });

    // Video-popup video-reviews
    //show
    $('.video__play_rev').click(function() {
        $('.video__popup_rev').fadeToggle(200);

        var video_data = $('.video__popup_rev iframe').data('src');
        $('.video__popup_rev iframe').attr('src', video_data);
    });
    //hide
    $('.video__popup_rev').click(function() {
        $('.video__popup_rev').fadeToggle(200);

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
                spaceBetween: -60,
            },
            1024: {
                spaceBetween: -440,
            },
            1280: {
                spaceBetween: -670,
            },
            1440: {
                spaceBetween: -770,
            },
            1600: {
                spaceBetween: -850,
            },
            1920: {
                spaceBetween: -900,
            },
        }
    });
});