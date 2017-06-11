var IH = window.innerHeight,
    IW = window.innerWidth;

$(".container__black").css({"height": IH, "width": IW/2});
$(".container__white").css({"height": IH, "width": IW/2});

var contentHeight = $(".container__content").height();
var text = $(".container__content").get("p")
