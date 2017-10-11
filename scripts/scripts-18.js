var resize = (function () {
	var IH = window.innerHeight,
			IW = window.innerWidth;

	$(".timeline__border").css({"height": IH,
                              "width": "20px"});
  $(".container__timeline").css({"height": IH + 10});
});

$( window ).onload(function( event ) {
	var data = 66;
	var i = 1;

	if (i <= data) {
			$(".container__timeline").append($("<section class='timeline__row--" + i + "'></section>"));
			$(".timeline__row--" + i).append($("<section class='timeline__marks-container'></section>").append($("<section class='timeline__mark'></section>")));
			$(".timeline__row--" + i).append($("<section class='timeline__imgs-container'></section>").append($("<section class='timeline__imgs-container'></section>").append("<img class='timeline__img' src='../assets/jpg/" + i + ".jpg'/>")));
			$(".timeline__row--" + i).append($("<section class='timeline__column'></section>"));
			$(".timeline__row--" + i).append($("<section class='timeline__descriptions-container'></section>").append($("<section class='description__block'>").load("../assets/html/designHistory.html .description__block--" + i)));
			i++;
	}
});

$(document).ready(resize);
$(window).resize(resize);
