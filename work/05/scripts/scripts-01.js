//basic functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//global vars
var mouseDown = false,
    clickCount = 0,
    transitionEnd = false,
    mXold = 0,
    mYold = 0;

document.body.onmousedown = function() {
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

//Disable touch stuff on mobile
// $(document).on("touchstart", function () {
//   mouseDown = true;
// });
// $(document).on("touchend", function () {
//   mouseDown = false;
// });

//removed touchstart from ""
$(window).on("mousemove resize", function(event) {
	var mX = event.pageX,
			mY = event.pageY,
      IH = window.innerHeight,
  		IW = window.innerWidth,
      items = $("a");

  $(window).on("click", function () {
    mXold = mX;
    mYold = mY;
  });


  if(mouseDown){
    $(".container__scroll").css({"transition": "0s"});

     $(".container__scroll--TL").css({"width": mX - 1 + "px",
                                       "height": mY + "px"});
     $(".container__scroll--TR").css({"width": IW - mX + "px",
                                      "height": mY + "px"});
     $(".container__scroll--BL").css({"width": mX - 2 + "px",
                                      "height": IH - mY  + "px"});
     $(".container__scroll--BR").css({"width": IW - mX + "px",
                                      "height": IH - mY  + "px"});

     $(".container__text").css({"margin": mX*0.025 + "px"});
     $(".container__text--about").css({"width": IW + "px",
                                       "margin": IW*0.002 + "px"});
     $("#about .text").css({"font-size": IW*0.0475 + "px"
                            // "margin": IW*0.002 + "px 0"
                          });

     $(".container__scroll .text--project").css({"font-size": (IW - mX)/15 + "px"});
     $(".container__scroll .text--project-l").css({"font-size": mX/15 + "px"});

     if (mX < (IW/2)) {
       $("#zero").trigger("play");
       $("#zero").removeClass("blur");
       $(".container__video--zero .container__text--project").addClass("hide");

       $("#comic").trigger("play");
       $("#comic").removeClass("blur");
       $(".container__video--comic .container__text--project").addClass("hide");

       $("#posters").trigger("pause");
       $("#posters").addClass("blur");
       $(".container__video--posters .container__text--project").removeClass("hide");
     }

     if (mX > (IW/2)) {
       $("#zero").trigger("pause");
       $("#zero").addClass("blur");
       $(".container__video--zero .container__text--project").removeClass("hide");

       $("#comic").trigger("pause");
       $("#comic").addClass("blur");
       $(".container__video--comic .container__text--project").removeClass("hide");

       $("#posters").trigger("play");
       $("#posters").removeClass("blur");
       $(".container__video--posters .container__text--project").addClass("hide");
     }
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

     $(".container__text--about").css({"width": IW + "px",
                                       "margin": IW*0.002 + "px"});
     $("#about .text").css({"font-size": IW*0.0475 + "px"
                            // "margin": IW*0.002 + "px 0"
                          });

    $(".container__scroll .text--project").css({"font-size": (IW - mXold)/15 + "px"});

    $(".container__scroll .text--project-l").css({"font-size": mXold/15 + "px"});

    if (mXold < (IW/2)) {
      $(".container__text--about").css({"width": IW});

      $("#zero").trigger("play");
      $("#zero").removeClass("blur");
      $(".container__video--zero .container__text--project").addClass("hide");

      $("#comic").trigger("play");
      $("#comic").removeClass("blur");
      $(".container__video--comic .container__text--project").addClass("hide");

      $("#posters").trigger("pause");
      $("#posters").addClass("blur");
      $(".container__video--posters .container__text--project").removeClass("hide");
    }

     if (mXold > (IW/2)) {
       $("#zero").trigger("pause");
       $("#zero").addClass("blur");
       $(".container__video--zero .container__text--project").removeClass("hide");

       $("#comic").trigger("pause");
       $("#comic").addClass("blur");
       $(".container__video--comic .container__text--project").removeClass("hide");

       $("#posters").trigger("play'");
       $("#posters").removeClass("blur");
       $(".container__video--posters .container__text--project").addClass("hide");
     }
  }
});

$(document).ready(function() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

  $(".container__scroll").css({"width": 0,
                               "height": 0});
  $(".container__scroll--TL").css({"width": IW + "px",
                                   "height": IH + "px"});
  $(".container__text--about").css({"width": IW + "px",
                                    "margin": IW*0.002 + "px"});
  $("#about .text").css({"font-size": IW*0.0475 + "px"
                         // "margin": IW*0.002 + "px 0"
                       });

   if (IW < 500) {
     $(".container__text--about").css({"width": IW + "px"});
     $("#about .text").css({"font-size": IW*0.059 + "px",
                            "letter-spacing": -0.75 + "px",
                            "line-height": 1.2});
   }
});

function fadeIn () {
  if (loaded) {
    $(".container__scroll").css({"opacity": 1});
  }
}

$("a").mouseover(function(){
  $("a").addClass("blurSmall");
  $("a").addClass("transition");
  $(".hoverblur").addClass("blurSmall");
  $(".hoverblur").addClass("transition");
  $(this).removeClass("blurSmall");
});

$("a").mouseout(function(){
  $("a").removeClass("blurSmall");
  $(".hoverblur").removeClass("blurSmall");
  setTimeout(function () {
    $("a").removeClass("transition");
    $(".hoverblur").removeClass("transition");
  }, 750);
});
