//Activate Wow.js
new WOW().init();

//Call to Parallax
$(document).ready(function (e) {
    if ($('.parallax-window').length) {
        $('.parallax-window').parallax();
    }
});

//Slide to particular section
var timer = 1000;
var offsetVal = 20;
$(".amaze-home-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".amaze-home").offset().top - offsetVal
    }, timer);
    return false;
});
$(".amaze-about-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".amaze-about").offset().top - offsetVal
    }, timer);
    return false;
});
$(".amaze-services-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".amaze-services").offset().top - offsetVal
    }, timer);
    return false;
});
$(".amaze-portfolio-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".amaze-portfolio").offset().top - offsetVal
    }, timer);
    return false;
});
