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
});