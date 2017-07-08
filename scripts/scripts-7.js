var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": IH, "width": IW});
		$(".grid__row").css({"margin": IH / 30});
		$(".grid__rect").css({"height": IH/9, "width": IW/11});

		$( ".grid__rect" ).mouseover(function() {
			$(this).find(".grid__link").css({"margin-bottom": "50px",
																			 "transform": "rotate(2deg)",
																			 "-webkit-transform": "rotate(2deg)",
																			});
			$(".grid__rect").css({"background-color": "rgba(254,253,252,1)"});
			$(this).css({"background-color": "rgba(255,255,255,1)",
									 "box-shadow": "0px 0px 23px 1px rgba(255,234,235,1)",
									 "width": IW/3});
		});

		$( ".grid__rect" ).mouseout(function() {
			$(this).find(".grid__link").css({"margin-bottom": "10px",
																			 "transform": "rotate(0deg)",
																			 "-webkit-transform": "rotate(0deg)",
																			});
			$(".grid__rect").css({"background-color": "rgba(255,255,255,1)"});
			$(this).css({"background-color": "rgba(255,255,255,1)",
									 "box-shadow": "0px 0px 0px 0px rgba(255, 255,255,1)",
									 // "transform": "rotateX(0deg)",
									 // "-webkit-transform": "rotateX(0deg)",
									 "width": IW/11});
		});
		$( ".grid__rect--gif" ).click(function() {
			$(this).css({"transform": "rotateX(180deg)",
									 "-webkit-transform": "rotateX(180deg)",
									 "background-image": "url('../assets/emojis/" + getRandomInt(1,33) + ".gif')",
								 });
		});
   });

$(document).ready(resize);
$(window).resize(resize);

$( document ).on( "mousemove", function( event ) {
	var mX = event.pageX,
			mY = event.pageY;

	$("body").css({"background": "linear-gradient(" + mX/10 + "deg, rgba(255,235,235,1), rgba(255,255,255,0))"});
});
