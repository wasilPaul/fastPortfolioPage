$(document).ready(function() {
        $(".contact").click(function () {
            var offset = 0; //Offset of 00px

            $('html, body').animate({
                scrollTop: $(".about_me").offset().top + offset
            }, 2000);
        });
});