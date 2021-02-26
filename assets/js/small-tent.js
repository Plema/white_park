$(document).ready(function() {

    // full page
    $(document).ready(function() {
        $('.fullpage').fullpage({
            scrollOverflow: true,
        });
    });

    //Slider for project
    $(document).ready(function(){
        $('.project__slider_img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            fade: true,
            asNavFor: '.project__slider_nav'
        });
        $('.project__slider_nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.project__slider_img',
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
        spaceBetween: -100,
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
                spaceBetween: -200,
            },
            1024: {
                spaceBetween: -340,
            },
            1280: {
                spaceBetween: -320,
            },
            1440: {
                spaceBetween: -320,
            },
            1600: {
                spaceBetween: -320,
            },
            1920: {
                spaceBetween: -320,
            },
        }
    });
});