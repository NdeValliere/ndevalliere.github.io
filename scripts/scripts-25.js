function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

    $(".container__grid").css({"width": IW + "px"});
		$(".grid__row").css({"width": IW + "px"});
    $(".grid__rect").css({"height": IH + "px"});
    $("img").css({"height": IH + "px"});
});

$(document).ready(resize);
$(window).resize(resize);
