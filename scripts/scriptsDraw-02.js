//Get random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
		$(".container__grid").css({"width": IW });
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


//Click-through images
// 
// var close = true;
//
// $(".container__grid").on('click',function(){
//   close = true;
//   console.log(close);
// });
//
// if (close) {
//   $("#thx--hover").css({"visibility": "hidden"});
// }
//
// $("#thx").on('click',function(){
//   close = false;
//
//   if (!close) {
//     $(".container__grid").append( "<section class='img__container--absolute'><img id='thx--hover' class='img--hover' src='../assets/rhonda/thx_01.png'></section>" );
//     $(".img--hover").css({"top": getRandomInt(0,25) + "%",
//                           "left": getRandomInt(0,25) + "%"});
//     $("#thx--hover").css({"visibility": "visible"});
//   }
// });
