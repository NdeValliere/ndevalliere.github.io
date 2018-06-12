var arrX = [],
    arrY = [],
    colors = ["blue", "red", "yellow"],
    over = false;

$(window).on("load", function() {
  appendCircles();

  setTimeout(function () {
    offset($(".inside"));
  }, 500);
});

$(window).on("mousemove", function(event) {
  var mX = event.pageX,
      mY = event.pageY,
      w = $(window).width(),
      h = $(window).height(),
      s = $("span"),
      c =  $(".inside"),
      a = $("a");
      rand = 1;

      //1.25vh max
      // console.log("x " + (mX/w*1.25) + " y " + (mY/h*1.25));
      if (!over) {
        c.css({"left": (-0.25 + (mX/w*2)) + "vh",
                "top": (-1 + (mY/h*2)) + "vh",
                "background": "black"
                });
      }

      rand = getRandomInt(1,3);

        a.mouseover(function(){
          over = true;
          $(this).addClass("color--" + rand);
          $(this).removeClass("black");

          $(this).find(c).css({"left": -1.5 + "vh",
                               "top": 0.5 + "vh",
                               "width": "2.75vh",
                               "height": "2.75vh",
                               "transition": "0.5s"
                               });
        });
        a.mouseout(function(){
          over = false;
          $(this).removeClass("color--" + rand);
          $(this).addClass("black");

          $(this).find(c).css({"width": "1.85vh",
                              "height": "1.85vh",
                              "transition": "0s"
                              });
        });

});

function offset(o) {
  for (var i = 1; i < o.length; i++) {
    arrX.push(o[i].getBoundingClientRect().left);
    arrY.push(o[i].getBoundingClientRect().top);
  }
}

function appendCircles() {
  $("span").append("<span class='inside black'></span>");
  $("a").addClass("black");

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
