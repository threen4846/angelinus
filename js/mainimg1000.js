$(function () {
    var current = 0;
    var setIntervalId;

    $(".btn_t li").eq(0).addClass("on");

    $(".btn_t li").click(function () {
        var i = $(this).index();

        move(i);
    });

    $("#mainimg_t").on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        },
    });

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 3) {
                n = 0;
            }

            move(n);
        }, 5000);
    }

    function move(i) {
        if (i == current) return;

        var currentEl = $(".list_t li ").eq(current);
        var nextEl = $(".list_t li ").eq(i);

        currentEl.css({ left: "0%" }).animate({ left: "-100%" });
        nextEl.css({ left: "100%" }).animate({ left: "0%" });
        current = i;
        $(".btn_t li").removeClass("on");
        $(".btn_t li").eq(i).addClass("on");
    }
});
