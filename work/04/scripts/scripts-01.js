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
     $(".container__text--about").css({"width":"auto"});
     $(".container__scroll .text--about").css({"font-size": mX/20 + "px",
                                               "margin": 0
                                             });
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

    $(".container__scroll .text--about").css({"font-size": mXold/20 + "px",
                                              "margin": 0
                                            });
    $(".container__scroll .text--project").css({"font-size": (IW - mXold)/35 + "px",
                                              "margin": (IW - mXold)/60 + "px 0"});
    $(".container__scroll .text--project-l").css({"font-size": mXold/35 + "px",
                                              "margin": mXold/60 + "px 0"});
  }

  if((mXold === 0) && (mX > IW*0.75) && (mY > IH*0.75)) {
    $(".mouse--resize").css({"cursor": "move"});
  }

  if((mXold > 0) && (mX > mXold-IW/4) && (mX < mXold+IW/4) && (mY > mYold-IH/4) && (mY < mYold+IH/4)) {
    $(".mouse--resize").css({"width": 0.65*IH,
                             "height": 0.65*IH,
                             "cursor": "move"});
  }

  $(".container__mouse").css({"top": mY - ($(".mouse--resize").innerHeight())/2,
                              "left": mX - ($(".mouse--resize").innerWidth())/2 });
  // $(".mouse--resize").css({"width": "25px",
  //                          "height": "25px",
  //                          "cursor": "default"});
});

$(window).on("load", function() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
      // aboutPositions = $(".container__text--about")[0].getBoundingClientRect();

  $(".mouse--resize").css({"width": 1.65*IH,
                           "height": 1.65*IH,
                           "cursor": "default"});
  $(".container__mouse").css({"bottom": -0.825*IH + "px",
                              "right": -0.825*IH + "px"});

  $(".container__scroll").css({"width": 0,
                               "height": 0});

  $(".container__scroll--TL").css({"width": IW + "px",
                                   "height": IH + "px"});
  $(".container__text--about").css({"width": IW*0.75 + "px",
                                    "margin": IW*0.04 + "px " + IW*0.04 + "px"});
  $("#about .text").css({"font-size": IW*0.035 + "px",
                         "margin": IW*0.0125 + "px 0"});

  setTimeout(function () {
      $("body").css({"opacity": 1});
  }, 1000);
});

// links
$("a").mouseover(function() {
  $(this).addClass("transition");
});
$("a").mouseout(function() {
  setTimeout(function () {
    $(this).removeClass("transition");
  }, 250);
});
