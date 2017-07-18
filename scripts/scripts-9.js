function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": IH, "width": IW,
                   "background-size": IW + "px " + IH * 1.1 + "px"});
    $(".container__grid").css({"transform": "perspective(" + IW*10 + "px) rotateX( -10deg )"});
		$(".grid__rect").css({"height": IH/5, "width": IW/7});
    $(".grid__rect-inner").css({"height": IH/6.1, "width": IW/7.15,
                                "margin-top": IH/30});


      $( ".grid__rect" ).mouseout(function() {
        $(".grid__rect").css({"margin-top": 0});
        $(".grid__row").css({"margin-right": 0,
                            "margin-left": 0});
        $(".grid__rect").css({"height": IH/5, "width": IW/7});
        $(".grid__rect-inner").css({"height": IH/6.1, "width": IW/7.15,
                                    "margin-top": IH/30});
      });
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

  $(this).css({"margin-top": "-175px",
                "width": "+=200px",
                "height": "+=200px"});
  $(this).find(".grid__rect-inner").css({"width": "+=200px",
                                          "height": "+=200px"});

  if (index == 1) {
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-75px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-25px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-5px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-0px"});
  }

  else if(index == 2) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-75px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-75px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-25px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-5px"});
  }

  else if(index == 3) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-25px"});
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-75px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-75px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-25px"});
  }

  else if(index == 4) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-5px"});
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-25px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-75px"});
    $(this).parent(".grid__row").children(":nth-child(5)").css({"margin-top": "-75px"});
  }

  else if(index == 5) {
    $(this).parent(".grid__row").children(":nth-child(1)").css({"margin-top": "-0px"});
    $(this).parent(".grid__row").children(":nth-child(2)").css({"margin-top": "-5px"});
    $(this).parent(".grid__row").children(":nth-child(3)").css({"margin-top": "-25px"});
    $(this).parent(".grid__row").children(":nth-child(4)").css({"margin-top": "-75px"});
  }

});

//Collective jitter of content
$( ".grid__row" ).mouseover(function() {
  var jitter = getRandomInt(1,10);
  if (jitter%2 == 0) {
    $(".grid__row").css({"margin-right": "-35px"});
  }
  else {
    $(".grid__row").css({"margin-left": "-35px"});
  }
});

//Background images for projects
$( ".grid__rect--gif").click(function() {
  $(this).find(".grid__rect-inner").css({"background-image": "url('../assets/emojis/" + getRandomInt(1,33) + ".gif')"});
});

$( ".grid__rect--game").click(function() {
  $(this).find(".grid__rect-inner").css({"background-image": "url('../assets/gifs/game-" + getRandomInt(1,4) + ".gif')"});
});


//Draggable UI
//-
$( function() {
  // $(".grid__rect-inner").resizable();

  $(".grid__rect").draggable({
    appendTo: 'body',
    start: function(event, ui) {
        isDraggingMedia = true;
        $(".grid__rect").css({"cursor": "-webkit-grabbing"});
    },
    stop: function(event, ui) {
        isDraggingMedia = false;
        $(".grid__rect").css({"cursor": "-webkit-grab"});
    }
  });
});
