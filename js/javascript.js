//var arrow = document.getElementById("arrow");
var $arrow = $("#arrow");
var $off = $("main").offset().top;
$arrow.on("click", function () {
    $("html, body").animate({
        scrollTop: $("main").offset().top
    }, 1000);
})
