//Math tools
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Window resizing tools
//-
var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$(".container__grid").css({"min-width": IW});
});

$(document).ready(resize);
$(window).resize(resize);

//Draggable UI
//-
// $( function() {
//   // $(".grid__rect-inner").resizable();
//
//   $(".grid__rect").draggable({
//     appendTo: 'body',
//     start: function(event, ui) {
//         isDraggingMedia = true;
//         $(".grid__rect").css({"cursor": "-webkit-grabbing"});
//     },
//     stop: function(event, ui) {
//         isDraggingMedia = false;
//         $(".grid__rect").css({"cursor": "-webkit-grab"});
//     }
//   });
// });

//Resize grid col + content on scroll
//-
$(window).on('scroll', function() {
    $(this).data('scrolled', true);
    if($(window).data('scrolled')) {
      $(".grid__col--8-grow").css({"width": "66.6%",
                                  "max-width": "879.12px"});
      $(".grid__col--4-shrink").css({"width": "33.3%",
                                   "max-width": "439.56px"});
    }

    if ($('.img__hide').isOnScreen()) {
      console.log("eyy");
      $(".img__hide").css({"margin-top": "0"});
    }
});

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
