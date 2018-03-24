var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$(".grid__row").css({"width": IW});
    $(".grid__rect").css({"height": IH/3});
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
