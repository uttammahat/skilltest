import 'bootstrap';

$(document).ready(function () {
    console.log('Webpack loaded!');

    var offset = 56;
    var duration = 550;
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
            $(".navbar-expand-lg").addClass("fixed-nav");
        } else {
            $(".navbar-expand-lg").removeClass("fixed-nav");
        }
    });
});
