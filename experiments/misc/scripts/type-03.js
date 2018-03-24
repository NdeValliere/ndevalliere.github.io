function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$(".grid__row").css({"width": IW + "px"});
    $(".grid__rect").css({"height": IH + "px"});
});

$(document).ready(resize);
$(window).resize(resize);

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

//Hover shit
$(document).ready(function() {
var i = 0;

  $( "html" ).click(function() {
    if(i < 100) {
      i++;
      $(".container__grid").append("<div class='grid__sticker grid__sticker--"+ i +"'><img src='../assets/png/sticker-0" + getRandomInt(0,4) + ".png'></div>");
      $(".grid__sticker--"+ i ).css({"top": getRandomInt(-100,1500) + "px",
                              "left": getRandomInt(-100,1500) + "px",
                              "right": getRandomInt(-100,1500) + "px",
                              "bottom": getRandomInt(-100,1500) + "px",});
    }
    console.log("clicking");
  });
});
