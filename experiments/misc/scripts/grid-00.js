function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mouseDown = false;
document.body.onmousedown = function() {
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

$( document ).on( "mousemove", function( event ) {
	var mX = event.pageX,
			mY = event.pageY,
      IH = window.innerHeight,
  		IW = window.innerWidth;

  if(mouseDown){
     $("img.scroll__close--left").css({"right": IW - mX + "px"})
     $(".container__scroll--TL").css({"width": mX + "px",
                                       "height": mY + "px"});
     $(".container__scroll--TR").css({"width": IW - mX + "px",
                                      "height": mY + "px"});
     $(".container__scroll--BL").css({"width": mX + "px",
                                      "height": IH - mY  + "px"});
     $(".container__scroll--BR").css({"width": IW - mX + "px",
                                      "height": IH - mY  + "px"});
     $(".container__scroll--TL img").css({"width": mX + "px"});
     $(".container__scroll--TR img").css({"width": IW - mX + "px" });
     $(".container__scroll--BL img").css({"width": mX + "px"});
     $(".container__scroll--BR img").css({"width": IW - mX + "px"});
   }
});
