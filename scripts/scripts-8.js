function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": IH, "width": IW,
                   "background-size": IW + "px " + IH * 1.1 + "px",
                   "transform": "perspective(" + IW + "px) rotateX( -40deg )"});
		$(".grid__rect").css({"height": IH/3, "width": IW/7});
    $(".grid__rect-inner").css({"height": IH/3.35, "width": IW/7.15,
                                "margin-top": IH/30});
   });

$(document).ready(resize);
$(window).resize(resize);

$(document).on( "mousemove", function( event ) {
	var mX = event.pageX,
			mY = event.pageY;

	// $("body").css({"background": "linear-gradient(" + mX/10 + "deg, rgba(211,211,211,1), rgba(255,255,255,0),rgba(255,255,255,0))"});
});

$( ".grid__rect" ).mouseover(function() {
  //get nth-child info of hovered element
  var index = $(this).index() + 1;

  $(this).css({"margin-top": "-=175px"});

  if (index == 1) {
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-=75px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-=25px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-=5px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-=0px"});
  }

  else if(index == 2) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-=75px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-=75px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-=25px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-=5px"});
  }

  else if(index == 3) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-=25px"});
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-=75px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-=75px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-=25px"});
  }

  else if(index == 4) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-=5px"});
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-=25px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-=75px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-=75px"});
  }

  else if(index == 5) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-=0px"});
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-=5px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-=25px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-=75px"});
  }

});

$( ".grid__row" ).mouseover(function() {
  var jitter = getRandomInt(1,10);

  if (jitter%2 == 0) {
    $(".grid__row").css({"margin-right": "-=10px"});
  }

  else {
    $(".grid__row").css({"margin-left": "-=10px"});
  }
});


// $( ".grid__rect" ).click(function() {
//   if(getRandomInt(1,10) % 2 == 0){
//     $(".grid__rect:nth-child(1)").css({"margin-right": "-=50"});
//   }
//   else {
//     $(this).css({"margin-right":  "-=50"});
//   }
// });


$( ".grid__rect" ).mouseout(function() {
  $(".grid__rect").css({"margin-top": 0});
  $(".grid__row").css({"margin-right": 0,
                      "margin-left": 0});
});

$( ".grid__rect--gif").click(function() {
  $(this).find(".grid__rect-inner").css({"background-image": "url('../assets/emojis/" + getRandomInt(1,33) + ".gif')"});
});


//Draggable UI
//-
$( function() {
  $('.grid__rect').draggable();
} );
