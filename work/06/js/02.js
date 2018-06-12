var arrX = [],
    arrY = [],
    colors = ["blue", "red", "green", "yellow"],
    over = false;

$(window).on("load", function() {
  appendCircles();
});

$(window).on("mousemove", function(event) {
  var mX = event.pageX,
      mY = event.pageY,
      w = $(window).width(),
      h = $(window).height(),
      s = $("span"),
      c =  $(".inside"),
      a = $("a");

      //1.25vh max
      // console.log("x " + (mX/w*1.25) + " y " + (mY/h*1.25));
      if (!over) {
        c.css({"left": (-0.25 + (mX/w*2)) + "vh",
                "top": (-1 + (mY/h*2)) + "vh",
                });
              }

        a.mouseover(function(){
          var clr = colors[getRandomInt(0,3)],
              // cY = $(this).find(c)[0].getBoundingClientRect().top;
              // cX = $(this).find(c)[0].getBoundingClientRect().left;
              over = true;


          // $(this).css({"color": clr});
          // for(var i = 0; i <  ) {
          //
          // }
          // c.css({"left": (-0.25 + (mX/cX*2)) + "vh",
          //        "top": (-1 + (mY/cY*2)) + "vh"
          //       });

          $(this).find(c).css({"background": clr,
                               "left": -1.5 + "vh",
                               "top": 0.5 + "vh",
                               "width": "2.75vh",
                               "height": "2.75vh",
                               "transition": "0.5s"
                               });
        });
        a.mouseout(function(){
          over = false;
          $(this).css({"color": "#000"});
          $(this).find(c).css({"background": "#000",
                              "width": "1.85vh",
                              "height": "1.85vh",
                              "transition": "0s"
                              });
        });

});

function appendCircles() {
  $("span").append("<span class='inside'></span>");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
