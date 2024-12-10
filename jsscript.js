$(document).ready(function () {
    $("nav ul li a").hover(
        function () {
            $(this).css("color", "#f39c12");
        },
        function () {
            $(this).css("color", "#fff");
        }
    );
});
