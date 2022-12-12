$(function () {
    $(".sub_menu").hide();

    let key = true;

    $("#header_in nav").mouseenter(function () {
        if (key == true) {
            key = false;
            $(".sub_menu")
                .stop()
                .show()
                .css({ height: 0 })
                .animate({ height: "200px" }, 500);
        }
    });

    $(".sub_menu").mouseleave(function () {
        key = true;
        $(this).stop().css({ height: "200px" }).animate({ height: 0 }, 500);
    });
});
