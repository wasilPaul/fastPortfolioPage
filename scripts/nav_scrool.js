$(document).ready(function () {
    $(".nav-brand--style").click(function () {
        var offset = 0; //Offset of 00px

        $('html, body').animate({
            scrollTop: $("#up_top").offset().top + offset
        }, 2000);
    });
    $(".contact").click(function () {
        var offset = 0;

        $('html, body').animate({
            scrollTop: $("#about_me").offset().top + offset
        }, 2000);
    });
    $(".project").click(function () {
        var offset = 0;

        $('html, body').animate({
            scrollTop: $("#projects").offset().top + offset
        }, 2000);
    });
});