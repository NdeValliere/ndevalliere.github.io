var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$(".timeline__border").css({"height": IH,
                                "width": "20px"});
    $(".container__timeline").css({"height": IH + 10});
  });
$(document).ready(resize);
$(window).resize(resize);

$( window ).scroll(function( event ) {
  var amountDates = 2017;
  var amountImgs = 66;
  var amountDescp = 4;

  for (var i = 1887; i <= amountDates; i++) {
    // $(".timeline__dates-container").append("<p class='timeline__dates'>" + i + "</p>");
    $(".timeline__marks-container").append("<section class='timeline__mark'></section>");
  }
  for (var i = 2; i <= amountImgs; i++) {
    $(".timeline__imgs-container").append("<img class='timeline__img' src='../assets/jpg/" + i + ".jpg'/>");
  }

  for (var i = 1; i <= amountDescp; i++) {
    $(".timeline__descriptions-container").append($("<section class='description__block'>").load("../assets/html/designHistory.html .description__block--" + i));
  }
});
