var IW = window.innerWidth,
    IH = window.innerHeight;

$(document).ready(resize(IW, IH));

function resize(x, y) {
  var amountBorders = $(".border__windows");
  var widthBorders = IW / (amountBorders.length - 1);

  $(".container__windows").css({"width": IW,
                                "height": IH/5,
                                "margin-top": (IH - (IH/5))/2 });
  $(".border__windows").css({"width": widthBorders,
                             "height": IH /5});

  setTimeout(function () {
    $(".border__windows").css({"transform": "perspective(" + IW + "px) rotateY( 62.5deg )",
                               "transition": "3s"});
    }, 1000);

    for (var i = 0; i < amountBorders.length; i++) {
      $(".border__windows").eq(i).css({"right":  i * (IW - widthBorders*1.25)/amountBorders.length,
                                       "width": widthBorders*2.5
                                     });
    }
}

$(".border__windows").mouseover( function() {
  var amountBorders = $(".border__windows");
  var position = $(".border__windows").index($(this));

  $(".border__windows").css({"transform": "perspective(" + IW + "px) rotateY( 85deg )",
                             "transition": "0.5s",
                             "border-right": "2px solid black"
                           });
  $(this).css({"transform": "perspective(" + 0 + "px) rotateY( 0 )",
                            "transition": "0.5s",
                            "right": "+=75px",
                            "background": "url('../assets/gifs/" + position + ".gif')",
                            "z-index": 10,
                            "border-right": "1px solid black"
                          });

  for (var i = (position+1); i <= (amountBorders.length); i++) {
    $(".border__windows").eq(i).css({"right": "+=150px"});
  }
});

$(".border__windows").mouseout( function() {
  var amountBorders = $(".border__windows");
  var position = $(".border__windows").index($(this));

  $(".border__windows").css({"transform": "perspective(" + IW + "px) rotateY( 62.5deg )",
                             "border-right": "1px solid black"
                            });
  $(this).css({"transform": "perspective(" + IW + "px) rotateY( 62.5deg )",
               "right": "-=75px",
               "background": "none",
               "z-index": -1
              });

   for (var i = (position+1); i <= (amountBorders.length); i++) {
     $(".border__windows").eq(i).css({"right": "-=150px"});
   }
});
