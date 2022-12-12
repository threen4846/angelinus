$(function () {
    var current = 0;
    var setIntervalId;

    $(".btn li").eq(0).addClass("on");

    $(".btn li").click(function () {
        var i = $(this).index();

        move(i);
    });

    $("#mainimg").on({
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

        var currentEl = $(".list li ").eq(current);
        var nextEl = $(".list li ").eq(i);

        currentEl.css({ left: "0%" }).animate({ left: "-100%" });
        nextEl.css({ left: "100%" }).animate({ left: "0%" });
        current = i;
        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
    }
});
