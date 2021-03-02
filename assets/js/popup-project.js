$(document).ready(function() {
    $(document).ready(function(){
        $('.project-popup__slider_img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            fade: true,
            asNavFor: '.project-popup__slider_nav'
        });
        $('.project-popup__slider_nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.project-popup__slider_img',
            focusOnSelect: true,
            infinite: true,
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
});