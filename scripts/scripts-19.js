var resize = (function () {
	var IH = window.innerHeight,
			IW = window.innerWidth;

	$(".timeline__border").css({"height": IH,
                              "width": "20px"});
  $(".container__timeline").css({"height": IH + 10});
});

$( window ).scroll(function(event) {
	var data = 66;
	for (var i = 1; i <= data; i++) {
			$(".container__timeline").append($("<section class='timeline__row timeline__row--" + i + "'></section>"));
			$(".timeline__row--" + i + ":not(:first)").remove();
			$(".timeline__row--" + i).append($("<section class='timeline__marks-container timeline__marks-container--" + i + "'></section>").append($("<section class='timeline__mark timeline__mark--" + i + "'></section>")));
			$(".timeline__marks-container--" + i + ":not(:first)").remove();
			$(".timeline__row--" + i).append($("<section class='timeline__dates-container timeline__dates-container--" + i + "'></section>").append($("<section class='timeline__dates timeline__dates--" + i + "'></section>").load("../assets/html/designHistory.html .timeline__date--" + i)));
			$(".timeline__dates-container--" + i + ":not(:first)").remove();
			$(".timeline__row--" + i).append($("<section class='timeline__imgs-container timeline__imgs-container--" + i + "'></section>").append($("<img class='timeline__img timeline__img--" + i + "' src='../assets/jpg/" + i + ".jpg'/>")));
			$(".timeline__imgs-container--" + i + ":not(:first)").remove();
			$(".timeline__row--" + i).append($("<section class='timeline__column timeline__column--" + i + "'></section>"));
			$(".timeline__column--" + i + ":not(:first)").remove();
			$(".timeline__row--" + i).append($("<section class='timeline__descriptions-container timeline__descriptions-container--" + i +"'></section>").append($("<section class='description__block description__block--" + i + "'>").load("../assets/html/designHistory.html .description__block--" + i)));
			$(".timeline__descriptions-container--" + i + ":not(:first)").remove();
	}
});

$(document).ready(resize);
$(window).resize(resize);
