$(document).ready(function() {
    
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
});