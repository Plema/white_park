$(document).ready(function() {


    // Show/hide nav
    $('.nav__toggle').on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        if ($('.nav__toggle').hasClass('active')) {
            $('.nav__toggle_btn').find('i').removeClass('icon-menu');
            $('.nav__toggle_btn').find('i').addClass('icon-close');
            $('.header__info').fadeToggle(200).addClass('active');

        } else {
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');
            $('.header__info').fadeToggle(200).removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var btn = $('.nav__toggle');
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            $('.nav__toggle').removeClass('active');
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');
            $('.header__info').fadeToggle(200).removeClass('active');
        }
    });

    // Fixed header
    /* let header = $(".header");
    let container = $('.header__info');
    let introH = $(".intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ){
            header.addClass("fixed");

        } else{
            header.removeClass("fixed");
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