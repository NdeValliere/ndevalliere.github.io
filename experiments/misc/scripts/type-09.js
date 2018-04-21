function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth,
        n = 25;

		$(".grid__row").css({"width": IW + "px",
                        "height": 150 + "px"});
    $(".grid__rect").css({"height": IH/0.5*n + "px"});
    $("p").css({"height": IH/(0.1*n-2) + "px"});

    for (var i = 0; i <= n; i++) {
      $(".grid__row:nth-child(" + i + ") .grid__rect p").css({"margin-top": -1* IH/((i+1)*n) + "px"});
      $(".container__grid").append("<section class='grid__row grid__row--" + i + "'></section>");
      $(".grid__row--" + i).append("<section class='grid__rect'><p class='letter letter--" + i + "'>ʒ</p></section>");
    }
});

$(document).ready(resize);
$(window).resize(resize);
