var IW = window.innerWidth,
    IH = window.innerHeight;

$(document).ready(resize(IW, IH));

function resize(x, y) {
  var amountBorders = $(".border__windows");
  var widthBorders = IW / (amountBorders.length - 1);

  $(".container__windows").css({"width": IW,
                                "height": IH/4,
                                "margin-top": (IH - (IH/4.5))/2 });
  $(".border__windows").css({"width": widthBorders,
                             "height": IH /4.5});

  setTimeout(function () {
    $(".border__windows").css({"transform": "perspective(" + IW*0.95 + "px) rotateY( 62.5deg )",
                               "transition": "3s"});
    }, 1000);

    for (var i = 0; i < amountBorders.length; i++) {
      $(".border__windows").eq(i).css({"right":  i * (IW - widthBorders*1)/amountBorders.length,
                                       "width": widthBorders*2.5
                                     });
    }
}

$(".border__windows").mouseover( function() {
  var amountBorders = $(".border__windows");
  var position = $(".border__windows").index($(this));

  $(".border__windows").css({"transform": "perspective(" + IW + "px) rotateY( 85deg )",
                             "transition": "0.5s",
                             "border-right": "7.5px solid black",
                             "border-left": "2.5px solid black"
                           });
  $(this).css({"transform": "perspective(" + 0 + "px) rotateY( 0 )",
                            "transition": "0.5s",
                            // "right": "-=5px",
                            "background": "url('../assets/gifs/" + position + ".gif')",
                            "z-index": 10,
                            "border-right": "1px solid black",
                            "border-left": "1px solid black"

                          });

  // for (var i = (position+1); i <= (amountBorders.length); i++) {
  //   $(".border__windows").eq(i).css({"right": "-=5px"});
  // }
});

$(".border__windows").mouseout( function() {
  var amountBorders = $(".border__windows");
  var position = $(".border__windows").index($(this));

  $(".border__windows").css({"transform": "perspective(" + IW + "px) rotateY( 62.5deg )",
                             "border-right": "2px solid black",
                             "border-left": "1px solid black"

                            });
  $(this).css({"transform": "perspective(" + IW + "px) rotateY( 62.5deg )",
               // "right": "+=5px",
               "background": "none",
               "z-index": 0
              });

   // for (var i = (position+1); i <= (amountBorders.length); i++) {
   //   $(".border__windows").eq(i).css({"right": "+=5px"});
   // }
});
