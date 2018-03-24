function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth,
        n = 5;

		$(".grid__row").css({"width": IW + "px"});
    $(".grid__rect").css({"height": IH/n + "px"});
    $("img").css({"height": IH/(n-2) + "px"});

    for (var i = 0; i <= n; i++) {
      $(".grid__row:nth-child(" + i + ") .grid__rect img").css({"margin-top": -1* IH/((i+1)*n) + "px"});
    }
});

$(document).ready(resize);
$(window).resize(resize);
