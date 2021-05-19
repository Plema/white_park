$(document).ready(function() {
    
    // placeholder
    $(document).ready(function() {
        $('.preloader').delay(400).fadeOut('slow');
    });
    
    // Mask for input-phone
    jQuery(function($){
        $(".input__phone").mask("+7 (999) 999-99-99");
    });

    // Show/hide map-nav
    $('.makeroute__main').click(function() {
        if($('.makeroute__inner').hasClass('hide')){
            $('.makeroute__inner').removeClass('hide');
            $('.makeroute__inner').fadeIn(200).addClass('show');
        } else {
            $('.makeroute__inner').fadeOut(200).removeClass('show');
            $('.makeroute__inner').addClass('hide');
        }
    });
    // Show/hide nav for another pages
    function showMenuLine() {
        $('.header__info_line').css({'right': '0px'});
    }
    function hideMenuLine() {
        $('.nav__toggle_line').css({'right': '0px'});
    }

    $('.nav__toggle_line').on("mouseenter", function(e) {
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

    $('.header__info_line').on('mouseleave', function(){
        setTimeout(hideMenuLine, 300);

        setTimeout(function(){
            $('.header__info_line').css({'right': '-300px'});
            $('.nav__toggle_line').removeClass('active');
            $('.nav__toggle_btn').find('i').removeClass('icon-close');
            $('.nav__toggle_btn').find('i').addClass('icon-menu');

        }, 301);
    });

    // $(document).click(function (e) {
    //     var btn = $('.nav__toggle_line');
    //     if (!btn.is(e.target) && btn.has(e.target).length === 0) {
    //         $('.header__info_line').css({'right': '-300px'});
    //         $('.nav__toggle_line').removeClass('active');
    //         $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
    //         $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

    //         setTimeout(hideMenuLine, 300);
    //     }
    // });

    $(window).scroll(function(){
        $('.header__info_line').css({'right': '-300px'});
        $('.nav__toggle_line').removeClass('active');
        $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
        $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

        hideMenuLine();
    });

    //Estimate-popup
    // show footer
    $('.footer__calc').click(function() {
        $('.popup-estimate .estimate').removeClass('hide-estimate');
        $('.popup-estimate .estimate').addClass('show-estimate');
        console.log("fkmdlkgnfkld");
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
    
    //Thanks
    //show thanks
    $('.active-thanks').click(function() {
        $('.thanks').removeClass('hide-thanks');
        $('.thanks').addClass('show-thanks');
    });
    //hide thanks
    $('.close-popup-thanks').click(function() {
        $('.thanks').removeClass('show-thanks');
        $('.thanks').addClass('hide-thanks');

        $('.popup-app .app').removeClass('show-app');
        $('.popup-app .app').addClass('hide-app');

        $('.popup-zvonok .zvonok').removeClass('show-zvonok');
        $('.popup-zvonok .zvonok').addClass('hide-zvonok');

        $('.popup-estimate .estimate').removeClass('show-estimate');
        $('.popup-estimate .estimate').addClass('hide-estimate');
    });
});