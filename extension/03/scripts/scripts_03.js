//Math tools
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Window resizing tools
//-
var IH = window.innerHeight,
    IW = window.innerWidth;
var resize = (function () {
		$(".container__grid").css({"width": IW,
                               "height": IH});
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
