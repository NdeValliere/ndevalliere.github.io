//Window resize content - 
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
		$(".container__grid").css({"width": IW
                                      });
}

//Tilt js commands
// $('.img__hover').tilt({
//     scale: 1.01,
// })

//Hover states
// $( ".img__hover" )
//   .on( "mouseenter", function() {
//     $( this ).css({"filter": "grayscale(50%) brightness(0.5)"});
//   })
//   .on( "mouseleave", function() {
//     $( this ).css({"filter": "grayscale(100%) brightness(0.1)"});
//   });
