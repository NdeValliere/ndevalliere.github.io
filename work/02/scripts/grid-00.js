//Window resize content -
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12;

		$(".container__grid").css({"width": IW,
                               "padding-top": gridUnit/2+ "%"
                             });
    $(".container__grid--absolute").css({"padding-top": gridUnit/2 + "%"});
    $(".grid__row").css({"padding": "0 " + gridUnit/2 + "%"});
    $(".page__link--logo").css({"padding-right": gridUnit/2 * 10 + "%"});
    $(".text--rotate").css({"margin-top": gridUnit/2 * -10 + "%"});
    $(".container__process").css({"width": IW });
    $(".process__bar").css({"width": IW/6 * 1 });
    $(".td__img").css({"margin-bottom": -2.1*(IW/16),
                       "padding-top": 2.1*(IW/16)});
    $(".td__border").css({"width": 2*(IW/12) + "px"});

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"width": (IW/12)*i + "px"});
      $(".td__space").css({"width": ($(".container__preview-imgs").innerWidth() - (4 * (IW/12)))/6 });
      $(".container__grid--"+ i ).css({"position" : "absolute"});
    }
   $(".container__grid--1" ).css({"opacity" : 1,
                                  "z-index": 20,
                                  "padding-top": "0"
                                  });
  for( var i = 0; i < 13; i++) {
      $(".container__grid--"+ i ).css({"margin-top" : (IH - $(".container__grid--"+ i ).innerHeight())/2,
                                       "margin-bottom" : (IH - $(".container__grid--"+ i ).innerHeight()) /2
                                      });
                                    }

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

          $(".container__grid--"+ (counter)).css({"opacity": "1",
                                                  "margin-top" :  $(".container__grid--"+ (counter)).css("margin-bottom"),
                                                  "z-index": 20
                                                  });
          $(".container__grid--"+ (counter+1)).css({"opacity": "0",
                                                    "padding-top": (100/12)/2 + "%",
                                                    "margin-top" : $(".container__grid--"+ (counter+1)).css("margin-bottom"),
                                                    "z-index": -1
                                                    // "border": "10px solid red"
                                                    });

      }

      if (e.originalEvent.wheelDelta < -50 && switchScrollDown && (counter<6)) {
        switchScrollDown = false;
        setTimeout(function(){
          switchScrollDown = true;
          counter++;
        }, 500);

        $(".process__bar").css({"width": ($(window).innerWidth() / 6) * (counter+1) });

        $(".container__grid--"+ (counter)).css({"opacity": "0",
                                                "margin-top" : -1 * ($(".container__grid--" + counter).innerHeight() + (($(window).innerHeight() - $(".container__grid--" + counter).innerHeight())/2)),
                                                "z-index": -1
                                                });
        $(".container__grid--"+ (counter+1)).css({"opacity": "1",
                                                  "padding-top": 0,
                                                  "z-index": 20
                                                });
      }
  });
});
