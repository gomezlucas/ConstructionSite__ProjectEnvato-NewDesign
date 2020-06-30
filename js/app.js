(function ($) {
    "use strict"; // Start of use strict

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled


    // backToTop Button hided by default 
    $('#back-to-top').fadeOut();
    //  scroll actions
    $(window).scroll(navbarCollapse);
    $(window).scroll(function () {
        console.log($(this).scrollTop(), $(this).width())
        if ($(this).scrollTop() > 50 && $(this).width() < 1440) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


})(jQuery); // End of use strict


 

$(window).load(function () {

});