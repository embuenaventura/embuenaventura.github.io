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
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            
            var sectionOffset = $(this.hash).offset().top - 50;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    // Smooth
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

    // wow.js
    new WOW().init();
    
        
    /*==========================================
                  back to top 
    ===========================================*/
    var btn = $('#back-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    /*==========================================
                  back to top 
    ===========================================*/

    

});
