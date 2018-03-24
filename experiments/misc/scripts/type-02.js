function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$(".grid__row").css({"width": IW + "px"});
});

$(document).ready(resize);
$(window).resize(resize);

//Draggable UI
//-
$( function() {
  // $(".grid__rect-inner").resizable();

  $(".grid__dot").draggable({
    appendTo: 'body',
    start: function(event, ui) {
        isDraggingMedia = true;
        $(".grid__dot").css({"cursor": "-webkit-grabbing"});
    },
    stop: function(event, ui) {
        isDraggingMedia = false;
        $(".grid__dot").css({"cursor": "-webkit-grab"});
    }
  });
});

//Hover shit
$( ".grid__dot" ).mouseover(function() {
  $(this).css({"margin-top": "-=" + getRandomInt(500, 2500) + "px",
                "margin-right": "-=" + getRandomInt(500, 2500) + "px",
                "margin-left": "-=" + getRandomInt(500, 2500) + "px",
                "margin-bottom": "-=" + getRandomInt(500, 2500) + "px"});
});

var rotation = 0;
jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
};
$('.grid__dot').mouseover(function() {
    rotation += getRandomInt(-360,360);
    $(this).rotate(rotation);
});
