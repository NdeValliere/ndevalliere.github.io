function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": IH, "width": IW});
		$(".grid__row").css({"margin": IH / 30});
		$(".grid__rect").css({"height": IH/9, "width": IW/11});
    $(".grid__row--center").find(".grid__rect").css({"height": 0, "width": IW});
    $(".grid__row--center").css({"margin": -IH/120});

    $( ".grid__rect--expand").click(function() {
      $(".grid__row--center").find(".grid__rect").css({"height": IH/9});
    });
   });

$(document).ready(resize);
$(window).resize(resize);

$( document ).on( "mousemove", function( event ) {
	var mX = event.pageX,
			mY = event.pageY;

	$("body").css({"background": "linear-gradient(" + mX/10 + "deg, rgba(211,211,211,1), rgba(255,255,255,0),rgba(255,255,255,0))"});
});

$( ".grid__rect" ).mouseover(function() {
  $(this).find(".grid__link").css({"margin-bottom": "50px",
                                   "transform": "rotate(3deg)",
                                   "-webkit-transform": "rotate(3deg)",
                                  });
  $(".grid__rect").css({"background-color": "rgba(255,255,255,0.9)"});
  $(this).css({"background-color": "rgba(255,255,255,1)",
               "box-shadow": "0px 0px 100px 1px rgba(211,211,211,0.5)",
              //  "width": IW/3
             });
});

$( ".grid__rect" ).mouseout(function() {
  $(this).find(".grid__link").css({"margin-bottom": "10px",
                                   "transform": "rotate(0deg)",
                                   "-webkit-transform": "rotate(0deg)",
                                  });
  $(".grid__rect").css({"background-color": "rgba(255,255,255,1)"});
  $(this).css({"background-color": "rgba(255,255,255,1)",
               "box-shadow": "0px 0px 0px 0px rgba(255, 255,255,1)",
              //  "width": IW/11
             });
});

$( ".grid__rect--blank" ).click(function() {
  $(this).css({"transform": "rotateX(180deg)",
               "-webkit-transform": "rotateX(180deg)"
             });
});

$( ".grid__rect--gif").click(function() {
  $(this).css({"background-image": "url('../assets/emojis/" + getRandomInt(1,33) + ".gif')"});
});
