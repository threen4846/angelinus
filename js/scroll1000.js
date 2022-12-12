$(function () {
    var scene01 = true;
    var scene02 = true;
    var scene03 = true;
    $("#coffee_t h3").hide();
    // $("#coffee_t p").hide();
    $("#news_t h3").hide();
    // $("#news_t p").hide();
    $("#event_t h3").hide();
    // $("#event_t p").hide();

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 100 && scene01 == true) {
            scene01 = false;
            $("#coffee_t h3")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ opacity: 1 }, 1000);
        } else if (sct < 99 && scene01 == false) {
            scene01 = true;
            $("#coffee_t h3")
                .stop()
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 1000);
        }

        if (sct > 500 && scene02 == true) {
            scene02 = false;
            $("#news_t h3")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ opacity: 1 }, 1000);
        } else if (sct < 499 && scene02 == false) {
            scene02 = true;
            $("#news_t h3")
                .stop()
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 1000);
        }

        if (sct > 1000 && scene03 == true) {
            scene03 = false;
            $("#event_t h3")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ opacity: 1 }, 1000);
        } else if (sct < 999 && scene03 == false) {
            scene03 = true;
            $("#event_t h3")
                .stop()
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 1000);
        }
    });
});
