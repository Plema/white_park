$(document).ready(function() {

    // Show/hide nav
    $('.nav__toggle').on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        if ($('.nav__toggle').hasClass('active')) {
            $('.nav__toggle_btn').find('i').removeClass('icon-menu');
            $('.nav__toggle_btn').find('i').addClass('icon-close');
        } else{
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');
        }
        $('.header__info').slideToggle(500).toggleClass('active');

    });

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
          var imgWidth = $('.tent__gallery_item').width();
          $('.tent__gallery_item').css({
            'height' : imgWidth
          });
        } else if ($(window).width() <= '768'){
    
        }
    }
    
    $(window).on('load resize',windowSize);

    // Mask for input-phone
    jQuery(function($){
        $(".input__phone").mask("+7 (999) 999-99-99");
    });
});