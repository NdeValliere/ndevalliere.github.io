var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": IH, "width": IW});
		$(".grid__row").css({"margin": IH / 30});
		$(".grid__rect").css({"height": IH/6, "width": IW*0.09});
   });

$(document).ready(resize);
$(window).resize(resize);

$( document ).on( "mousemove", function( event ) {
	var mX = event.pageX,
			mY = event.pageY;

			console.log (mX);

	$("body").css({"background": "linear-gradient(" + mX/10 + "deg, rgba(255,235,235,1), rgba(255,255,255,0))"});
});
