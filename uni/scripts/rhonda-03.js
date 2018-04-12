//Get random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create jQuery Method
jQuery.fn.isFullyVisible = function(){

var win = $(window);

var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var elemtHeight = this.height();// Get the full height of current element
elemtHeight = Math.round(elemtHeight);// Round it to whole humber

var bounds = this.offset();// Coordinates of current element
bounds.top = bounds.top + elemtHeight;
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}

//Window resize content -
//-
$(document).ready(resize);
$(window).resize(resize);

var gridUnit = 100/12;

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
		// $(".container__grid").css({"width": IW });
    $(".grid__row").css({"padding": "0 " + gridUnit/2 + "%",
                         "margin": gridUnit/2 + "% 0 " + gridUnit + "% 0"});
    $(".grid__row--img").css({"padding": "0 " + gridUnit/1.5 + "%",
                              "margin": gridUnit*1.5 + "% 0",
                              "margin-left": -0.75 * gridUnit + "%"});
}

//Tilt js commands
$('.img__hover').tilt({
    scale: 1.1,
})

//Hover states
$( ".img__hover" )
  .on( "mouseenter", function() {
    $( this ).css({"filter": "grayscale(50%) brightness(0.5)"});
  })
  .on( "mouseleave", function() {
    $( this ).css({"filter": "grayscale(100%) brightness(0.1)"});
  });

$("#thx").click(function () {
    // $(".process__bar").animate({
		// 		width: window.innerWidth*3
    // }, 2000, function() {
    //   //thing to do when you animation is finished e.g.
      location.href = "rhonda-02-thx.html";
    // });
});
$("#circ").click(function () {
  location.href = "rhonda-02-circ.html";
});
$("#comic-A").click(function () {
  location.href = "rhonda-02-comic-A.html";
});
$("#comic-B").click(function () {
  location.href = "rhonda-02-comic-B.html";
});
$("#comic-C").click(function () {
  location.href = "rhonda-02-comic-C.html";
});
$("#poem-A").click(function () {
  location.href = "rhonda-02-poem-A.html";
});
$("#poem-B").click(function () {
  location.href = "rhonda-02-poem-B.html";
});
$("#poem-C").click(function () {
  location.href = "rhonda-02-poem-C.html";
});
$("#poem-D").click(function () {
  location.href = "rhonda-02-poem-D.html";
});

//Scroll-through code for process bar
//-
$(window).on("scroll", function() {
  for (var i = 0; i < 4; i++) {
    if( $(".img").isFullyVisible() ){
      $(".img").css({"opacity": 1,
                   "margin-top": 0});
    }
  }
});
