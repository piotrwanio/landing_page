//var arrow = document.getElementById("arrow");
var $arrow = $("#arrow");
var $off = $("main").offset().top;
$arrow.on("click", function () {
    $("html, body").animate({
        scrollTop: $("main").offset().top
    }, 1000);
})


$(document).ready(function () {

    var menu = $("menu.active");
    var hamburger = $("nav i");
    var menuOpen;

    function openMenu() {
        menu.css("right", "0px");
        hamburger.css("color", "white");
        menuOpen = true;
    }

    function closeMenu() {
        menu.css("right", "-90%");
        hamburger.css("color", "black");
        menuOpen = false;
    }

    function toggleMenu() {
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    /*

        hamburger.on({
            mouseenter: function () {
                openMenu();
            }
        });

        menu.on({
            mouseleave: function () {
                closeMenu();
            }

        });
    */

    hamburger.on({
        click: function () {
            toggleMenu();
        }
    })



});
