$(document).ready(function () {

    // transparent to soid
    var $document = $(document),
        $element = $('.navbar'),
        $elementpic = $('.logo'),
        logoDef = 'logo-def';
        navbarDefault = 'navbar-default';
    navbarTransparent = 'navbar-transparent';
    fadeInDown = 'fadeInDown';


    $document.scroll(function () {
        if ($document.scrollTop() >= 100) {
            $element.addClass(navbarDefault);
            $elementpic.addClass(logoDef);
            $element.removeClass(navbarTransparent);
            $element.addClass(fadeInDown);
        } else {
            $element.addClass(navbarTransparent);
            $elementpic.removeClass(logoDef);
            $element.removeClass(navbarDefault);
            $element.removeClass(fadeInDown);
        }
    })

    // Active
    $("a").click(function(){
            
        // remove the class i.e. selectednav from all li
        $('.nav-item a').removeClass("active");
        // apply selectednav class to the current item
                    $(this).addClass("active");
    });

    // wow.js
    new WOW().init();
    

});
