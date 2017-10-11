var resize = (function () {
	var IH = window.innerHeight,
			IW = window.innerWidth;

	$(".timeline__border").css({"height": IH,
                              "width": "20px"});
  $(".container__timeline").css({"height": IH + 10});
});

$(document).ready(resize);
$(window).resize(resize);
