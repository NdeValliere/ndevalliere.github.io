//basic functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//global vars
var mouseDown = false,
    mXold = 0,
    mYold = 0;

document.body.onmousedown = function() {
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

$(window).on("mousemove resize", function(event) {
	var mX = event.pageX,
			mY = event.pageY,
      IH = window.innerHeight,
  		IW = window.innerWidth;

  $(window).click(function() {
    mXold = mX;
    mYold = mY;
  });

  if(mouseDown){
     $(".container__scroll--TL").css({"width": mX - 1 + "px",
                                       "height": mY + "px"});
     $(".container__scroll--TR").css({"width": IW - mX + "px",
                                      "height": mY + "px"});
     $(".container__scroll--BL").css({"width": mX - 2 + "px",
                                      "height": IH - mY  + "px"});
     $(".container__scroll--BR").css({"width": IW - mX + "px",
                                      "height": IH - mY  + "px"});

    $(".container__text").css({"margin": mX/50 + "px"});

    //  console.log("mX: " + ((100-mX)/50));
     $(".container__scroll .text--about").css({"font-size": mX/25 + "px",
                                               "margin": mX/50 + "px 0"});
     $(".container__scroll .text--project").css({"font-size": (IW - mX)/35 + "px",
                                               "margin": (IW - mX)/75 + "px 0"});
     $(".container__scroll .text--project-l").css({"font-size": mX/35 + "px",
                                               "margin": mX/60 + "px 0"});
   }
  if((!mouseDown) && (mXold > 0)) {
    $(".container__scroll--TL").css({"width": mXold - 1 + "px",
                                     "height": mYold + "px"});
    $(".container__scroll--TR").css({"width": IW - mXold + "px",
                                     "height": mYold + "px"});
    $(".container__scroll--BL").css({"width": mXold - 2 + "px",
                                     "height": IH - mYold  + "px"});
    $(".container__scroll--BR").css({"width": IW - mXold + "px",
                                     "height": IH - mYold  + "px"});

    $(".container__scroll .text--about").css({"font-size": mXold/25 + "px",
                                              "margin": mXold/50 + "px 0"});
    $(".container__scroll .text--project").css({"font-size": (IW - mXold)/35 + "px",
                                              "margin": (IW - mXold)/60 + "px 0"});
    $(".container__scroll .text--project-l").css({"font-size": mXold/35 + "px",
                                              "margin": mXold/60 + "px 0"});
  }
});

$(window).on("load", function() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
  $(".container__scroll").css({"width": IW/2-0.5 + "px",
                               "height": IH/2 + "px"});

  $(".container__scroll--BL").css({"width": IW/2-2 + "px"});

  $(".container__scroll .text").css({"font-size": IW/50 + "px",
                                     "margin": IW/70 + "px 0"});
  $(".container__scroll .text--project").css({"font-size": IW/70 + "px"});
  $(".container__text").css({"margin": IW/100 + "px"});

  setTimeout(function () {
      $("body").css({"opacity": 1});
  }, 3000);
});
