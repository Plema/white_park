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
        $('.video__popup').toggle();
    });
    //hide
    $('.video__popup').click(function() {
        $('.video__popup').toggle();
        $('.intro__play_outline').toggleClass('active');
    });
});