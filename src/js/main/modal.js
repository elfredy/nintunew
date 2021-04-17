$(document).ready(function () {

    $(".contact__contactLink").on("click", function (e) {

        $(".contactModal").css({
            "opacity": "1",
            "visibility": "visible",
            "transform": "scale(1)"
        })


        e.preventDefault()
    })
    $(".contactModal__close").on("click", function (e) {

        $(".contactModal").css({
            "opacity": "0",
            "visibility": "hidden",
            "transform": "scale(.7)"
        })


        e.preventDefault()
    })
    $(".request__link").on("click", function (e) {

        $(".demoModal").css({
            "opacity": "1",
            "visibility": "visible",
            "transform": "scale(1)"
        })


        e.preventDefault()
    })
    $(".demoModal__close").on("click", function (e) {

        $(".demoModal").css({
            "opacity": "0",
            "visibility": "hidden",
            "transform": "scale(.7)"
        })


        e.preventDefault()
    })
})