var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": IH, "width": IW});
		$(".grid__row").css({"margin": IH / 30});
		$(".grid__rect").css({"height": IH/6, "width": IW/11});

		$( ".grid__rect" ).mouseover(function() {
			$(".grid__rect").css({"background-color": "rgba(255,255,255,0.5)"});
			$(this).css({"background-color": "rgba(255,255,255,1)",
									 "box-shadow": "0px 0px 23px 1px rgba(255,234,235,1)",
									 // "transform": "rotateX(180deg)",
									 // "-webkit-transform": "rotateX(180deg)",
									 "width": IW/2.9});
		});

		$( ".grid__rect" ).mouseout(function() {
			$(".grid__rect").css({"background-color": "rgba(255,255,255,1)"});
			$(this).css({"background-color": "rgba(255,255,255,1)",
									 "box-shadow": "0px 0px 0px 0px rgba(255, 255,255,1)",
									 // "transform": "rotateX(0deg)",
									 // "-webkit-transform": "rotateX(0deg)",
									 "width": IW/11});
		});
   });

$(document).ready(resize);
$(window).resize(resize);

$( document ).on( "mousemove", function( event ) {
	var mX = event.pageX,
			mY = event.pageY;

	$("body").css({"background": "linear-gradient(" + mX/10 + "deg, rgba(255,235,235,1), rgba(255,255,255,0), rgba(255,255,255,0))"});
});
