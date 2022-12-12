$(function () {
    var scene01 = true;
    var scene02 = true;
    var scene03 = true;
    $("#coffee .coffee_pic").hide();
    $("#coffee .coffee_txt").hide();
    $("#news .news_txt").hide();
    $("#news .news_pic").hide();
    $("#event .event_txt").hide();
    $("#event .event_pic").hide();

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 300 && scene01 == true) {
            scene01 = false;
            $("#coffee .coffee_pic")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ left: "100px", opacity: 1 }, 1000);
            $("#coffee .coffee_txt")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ right: "100px", opacity: 1 }, 1000);
        } else if (sct < 299 && scene01 == false) {
            scene01 = true;
            $("#coffee .coffee_pic")
                .stop()
                .css({ opacity: 1 })
                .animate({ left: 0, opacity: 0 }, 1000);
            $("#coffee .coffee_txt")
                .stop()
                .css({ opacity: 1 })
                .animate({ right: 0, opacity: 0 }, 1000);
        }

        if (sct > 700 && scene02 == true) {
            scene02 = false;
            $("#news .news_txt")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ left: "100px", opacity: 1 }, 1000);
            $("#news .news_pic")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ right: "100px", opacity: 1 }, 1000);
        } else if (sct < 699 && scene02 == false) {
            scene02 = true;
            $("#news .news_txt")
                .stop()
                .css({ opacity: 1 })
                .animate({ left: 0, opacity: 0 }, 1000);
            $("#news .news_pic")
                .stop()
                .css({ opacity: 1 })
                .animate({ right: 0, opacity: 0 }, 1000);
        }

        if (sct > 1300 && scene03 == true) {
            scene03 = false;
            $("#event .event_txt")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ left: "100px", opacity: 1 }, 1000);
            $("#event .event_pic")
                .stop()
                .show()
                .css({ opacity: 0 })
                .animate({ right: "100px", opacity: 1 }, 1000);
        } else if (sct < 1299 && scene03 == false) {
            scene03 = true;
            $("#event .event_txt")
                .stop()
                .css({ opacity: 1 })
                .animate({ left: 0, opacity: 0 }, 1000);
            $("#event .event_pic")
                .stop()
                .css({ opacity: 1 })
                .animate({ right: 0, opacity: 0 }, 1000);
        }
    });
});
