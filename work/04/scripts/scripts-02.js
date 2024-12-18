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

     $(".container__text--about").css({"width": mX*0.65 + "px",
                                       "margin": mX*0.025 + "px"});
     $(".container__scroll .text--about").css({"font-size": mX*0.0275 + "px",
                                               "margin": mX*0.002 + "px 0"
                                             });

     $(".container__scroll .text--project").css({"font-size": (IW - mX)/35 + "px",
                                                 "margin": (IW - mX)*0.002 + "px 0",
                                                 "transform": "skew(-20deg)"});
     $(".container__scroll .text--project-l").css({"font-size": mX/35 + "px",
                                                   "margin": mX*0.002 + "px 0"});

     $(".text--about-small").css({"font-size": mX*0.02 + "px"});

     if (mX < (IW/2)) {
       $(".container__text--about").css({"width": "auto"});

       $("#zero").trigger("play");
       $("#zero").css({"background": "rgba(0,0,0,0)",
                       "mix-blend-mode": "initial"});
       $(".container__scroll--TR").css({"background": "white"});
       $('.container__video--zero .container__text').css({"opacity": 1});
       $(".container__video--zero").css({"background": "rgba(0,0,0,0)",
                                         "mix-blend-mode": "initial"});
       $("#comic").trigger("play");
       $(".container__scroll--BR").css({"border-left": "1px solid black"})
       $('.container__video--comic .container__text').css({"opacity": 1});
       $(".container__scroll--BR").css({"background": "black"});
       $(".container__video--comic").css({"background": "rgba(0,0,0,0)",
                                          "mix-blend-mode": "initial"});

       $("#posters").trigger("pause");
       $(".container__scroll--BL").css({"border-color": "white"})
       $('.container__video--posters .container__text').css({"opacity": 0});
       $(".container__scroll--BL").css({"background": "white"});
       $(".container__video--posters").css({"background": "white",
                                            "mix-blend-mode": "difference"});
     }

     if (mX > (IW/2)) {
       $("#zero").trigger("pause");
       $("#zero").css({"background": "white",
                       "mix-blend-mode": "difference"});
       $(".container__scroll--TR").css({"background": "black"});
       $('.container__video--zero .container__text').css({"opacity": 0});
       $(".container__video--zero").css({"background": "white",
                                          "mix-blend-mode": "difference"});
       $("#comic").trigger("pause");
       $(".container__scroll--BR").css({"border-left": "1px solid white"})
       $('.container__video--comic .container__text').css({"opacity": 0});
       $(".container__scroll--BR").css({"background": "white"});
       $(".container__video--comic").css({"background": "white",
                                          "mix-blend-mode": "difference"});


       $("#posters").trigger("play");
       $(".container__scroll--BL").css({"border-color": "black"})
       $('.container__video--posters .container__text').css({"opacity": 1});
       $(".container__scroll--BL").css({"background": "black"});
       $(".container__video--posters").css({"background": "rgba(0,0,0,0)",
                                            "mix-blend-mode": "initial"});
     }
   }

  if (!mouseDown) {
    $(".container__scroll .text--project").css({"transform": "skew(0deg)"});
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

    $(".container__text--about").css({"width": mXold*0.65 + "px"});

    $(".container__scroll .text--about").css({"font-size": mXold*0.0275 + "px",
                                              "margin": mXold*0.002 + "px 0"
                                            });
    $(".container__scroll .text--project").css({"font-size": (IW - mXold)/35 + "px",
                                                "margin": (IW - mXold)*0.002 + "px 0"});

    $(".container__scroll .text--project-l").css({"font-size": mXold/35 + "px",
                                                  "margin": mXold*0.002 + "px 0"});

    $(".text--about-small").css({"font-size": mXold*0.02 + "px"});

    if (mXold < (IW/2)) {
      $(".container__text--about").css({"width": "auto"});
      // console.log("IW smaller than half");
      $('#zero').trigger('play');
      $("#zero").css({"background": "rgba(0,0,0,0)",
                      "mix-blend-mode": "initial"});
      $(".container__scroll--TR").css({"background": "white"});
      $('.container__video--zero .container__text').css({"opacity": 1});
      $(".container__video--zero").css({"background": "rgba(0,0,0,0)",
                                        "mix-blend-mode": "initial"});
      $('#comic').trigger('play');
      $(".container__scroll--BR").css({"border-left": "1px solid black"})
      $('.container__video--comic .container__text').css({"opacity": 1});
      $(".container__scroll--BR").css({"background": "black"});
      $(".container__video--comic").css({"background": "rgba(0,0,0,0)",
                                        "mix-blend-mode": "initial"});

      $('#posters').trigger('pause');
      $(".container__scroll--BL").css({"border-color": "white"})
      $('.container__video--posters .container__text').css({"opacity": 0});
      $(".container__scroll--BL").css({"background": "white"});
      $(".container__video--posters").css({"background": "white",
                                         "mix-blend-mode": "difference"});
    }

     if (mXold > (IW/2)) {
       $('#zero').trigger('pause');
       $("#zero").css({"background": "white",
                       "mix-blend-mode": "difference"});
       $(".container__scroll--TR").css({"background": "black"});
       $('.container__video--zero .container__text').css({"opacity": 0});
       $(".container__video--zero").css({"background": "white",
                                          "mix-blend-mode": "difference"});
       $('#comic').trigger('pause');
       $(".container__scroll--BR").css({"border-left": "1px solid white"})
       $('.container__video--comic .container__text').css({"opacity": 0});
       $(".container__scroll--BR").css({"background": "white"});
       $(".container__video--comic").css({"background": "white",
                                          "mix-blend-mode": "difference"});

       $('#posters').trigger('play');
       $(".container__scroll--BL").css({"border-color": "black"})
       $('.container__video--posters .container__text').css({"opacity": 1});
       $(".container__scroll--BL").css({"background": "black"});
       $(".container__video--posters").css({"background": "rgba(0,0,0,0)",
                                            "mix-blend-mode": "initial"});
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
  $(".container__text--about").css({"width": IW*0.65 + "px",
                                    "margin": IW*0.035 + "px"});
  $("#about .text").css({"font-size": IW*0.0275 + "px",
                         "margin": IW*0.002 + "px 0"});
  $(".text--about-small").css({"font-size": IW*0.02 + "px"});

   if (IW < 500) {
     $(".container__text--about").css({"width": IW * 0.9 + "px",
                                       "margin": IW*0.05 + "px",
                                       "margin-right": IW * 0.1});
     $("#about .text").css({"font-size": IW*0.055 + "px",
                            "margin": IW*0.005 + "px 0"});
     $(".text--about-small").css({"font-size": IW*0.0225 + "px"});
   }
});

function fadeIn () {
  if (loaded) {
    $(".container__scroll").css({"opacity": 1});
  }
}


$("a").mouseover(function(){
  $(this).addClass("transition");
});
$("a").mouseout(function(){
  setTimeout(function () {
    $(this).removeClass("transition");
  }, 250);
});


$(".container__scroll").mouseover(function() {
  $(this).find(".container__text--project").removeClass("hide");
  $(this).find("video").addClass("blur");

});

$(".container__scroll").mouseout(function() {
  $(this).find(".container__text--project").addClass("hide");
  $(this).find("video").removeClass("blur");

});
