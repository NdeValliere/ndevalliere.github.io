function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("container__svg").css({"height": IH, "width": IW});

  });

$(document).ready(resize);
$(window).resize(resize);


$("path").mouseover(function() {
    $(this).css({"stroke": "rgba(255,255,255,1)",
									"stroke-width": "1",
									"animation": "pathStroke " +getRandomInt(10,10000) + " ease alternate infinite"});
});

$("path").mouseout(function() {
    $(this).css({"animation": "pathStroke 1000 ease alternate infinite"});
});
