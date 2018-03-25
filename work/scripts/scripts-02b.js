//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

    $("body").css({"height": IH });
    $(".link__out--archive").css({"padding-top": 100/24 + "%",
                                  "padding-right": 100/24 + "%"});
		$(".container__grid").css({"width": IW,
                               "padding-top": 100/60 + "%"});
    $(".container__process").css({"width": IW });
    $(".process__bar").css({"width": IW/6 * 1 });

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"width": (IW/12)*i + "px"});
      $(".container__grid--"+ i ).css({"position" : "absolute",
                                        "margin-top" : (IH - $(".container__grid--"+ i ).innerHeight()) /2,
                                        "margin-bottom" : (IH - $(".container__grid--"+ i ).innerHeight()) /2
                                      });
   }
   $(".container__grid--1" ).css({"opacity" : 1,
                                  "z-index": 20
                                  });
}

//Scroll-through code for slideshow-ish transitions
//-
$(document).ready(function() {
  var counter = 1,
      //prevent scrolling+transitions from going too fast
      switchScrollUp = true,
      switchScrollDown = true;

  $(document).bind('mousewheel', function(e){
      console.log(counter);
    // console.log(e.originalEvent.wheelDelta + " " + switchScroll);
      if (e.originalEvent.wheelDelta > 50 && switchScrollUp && (counter>0)) {
          switchScrollUp = false;
          setTimeout(function(){
            switchScrollUp = true;
            counter--;
          }, 500);

          $(".process__bar").css({"width": ($(window).innerWidth() / 6) * (counter) });
          $(".container__grid--"+ (counter)).css({"opacity": 1,
                                                  "margin-top" :  $(".container__grid--"+ (counter+1)).css("margin-bottom"),
                                                  "z-index": 20
                                                  });
          $(".container__grid--"+ (counter+1)).css({"opacity": 0,
                                                    "padding-top": 100/60 + "%",
                                                    "margin-top" : $(".container__grid--"+ (counter+2)).css("margin-bottom"),
                                                    "z-index": -1
                                                    });

      }

      if (e.originalEvent.wheelDelta < -50 && switchScrollDown && (counter<6)) {
        switchScrollDown = false;
        setTimeout(function(){
          switchScrollDown = true;
          counter++;
        }, 500);

        $(".process__bar").css({"width": ($(window).innerWidth() / 6) * (counter+1) });
        $(".container__grid--"+ (counter)).css({"opacity": 0,
                                                "margin-top" : -1 * ($(".container__grid--" + counter).innerHeight() + (($(window).innerHeight() - $(".container__grid--" + counter).innerHeight())/2)),
                                                "z-index": -1
                                                });
        $(".container__grid--"+ (counter+1)).css({"opacity": 1,
                                                  "padding-top": 0,
                                                  "z-index": 20
                                                });
      }
  });
});

//Get random number
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Link hover animations
//-
// $(".link__out").mouseover(function() {
// });
//
// $(".link__out").mouseout(function() {
// });


//Switch out cursor image depending on content
//sizing and styling need some tweaking - also think about interaction with default mode vs animations based on specific interactions with content e.g. click + link!
//-
$("body").mousemove(function(e) {

  $(".cursor__img").offset({
      left: e.pageX,
      top: e.pageY + 20
  });

  if( $(".container__grid--1").css('opacity') == 1) {
    $("#cursor__img-about").css({"visibility": "visible"});
  }

  else if ( ($(".container__grid--2").css('opacity') == 1) || ($(".container__grid--3").css('opacity') == 1) || ($(".container__grid--4").css('opacity') == 1 ) ) {
    $("#cursor__img-click").css({"visibility": "visible"});
  }

  else if (($(".container__grid--1").css('opacity') == 0) && ($(".container__grid--2").css('opacity') == 0) && ($(".container__grid--3").css('opacity') == 0) && ($(".container__grid--4").css('opacity') == 0 )) {
    $("body").css({"cursor": "default"});
  }

  else {
    $("#cursor__img-about").css({"visibility": "hidden"});
    $("#cursor__img-click").css({"visibility": "hidden"});
    $("body").css({"cursor": "none"});
  }
});

//Click-through to case studies
//-
// $('.container__grid--2').click(function () {
//     $('.container__swipe--black').animate({
// 				height: window.innerHeight*2
//     }, 2000,
//     function() {
//       //thing to do when you animation is finished e.g.
//       location.href = 'workco.html';
//     });
// });

//Links
//-
$("a").mouseover(function () {
      $(this).wavyText();
  });
