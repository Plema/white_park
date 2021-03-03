$(document).ready(function() {
    // Mask for input-phone
    jQuery(function($){
        $(".input__phone").mask("+7 (999) 999-99-99");
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

    $(document).mouseup(function (e) {
        var btn = $('.nav__toggle_line');
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            $('.header__info_line').css({'right': '-300px'});
            $('.nav__toggle_line').removeClass('active');
            $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

            setTimeout(hideMenuLine, 300);
        }
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
});