$(document).ready(function() {

$("#hamburger").click(function() {
$("#menu").toggleClass("openmenu");
})

$("#homebtn").click(() => {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 600);
});

$("#section2btn").click(() => {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 600);
});

$("#section3btn").click(() => {
    $('html, body').animate({
        scrollTop: $("#section3").offset().top
    }, 600);
});

$("#section4btn").click(() => {
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 600);
});


});
