//Activate Wow.js
new WOW().init();

//Slide to particular section
var timer = 1000;
var offsetVal = 20;
$(".home-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".section-home").offset().top - offsetVal
    }, timer);
    return false;
});
$(".about-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".section-about").offset().top - offsetVal
    }, timer);
    return false;
});
$(".services-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".section-services").offset().top - offsetVal
    }, timer);
    return false;
});
$(".portfolio-link").click(function () {
    $('html, body').animate({
        scrollTop: $(".section-portfolio").offset().top - offsetVal
    }, timer);
    return false;
});
