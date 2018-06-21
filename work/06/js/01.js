var arrX = [],
    arrY = [],
    colors = ["blue", "red", "yellow"],
    over = false,
    styleRatio = 1.75,
    relativeTo = "vw";

$(window).on("load", function() {
  appendCircles();
  concreteLayout();

  setTimeout(function () {
    $(".section p").css({"transition": 10 + "s"});
    setInterval(function () {
      concreteLayout();
    }, 10000);
  }, 10);

  setTimeout(function () {
    offset($(".inside"));
  }, 500);

  $("body").css({"font-size": styleRatio * 1.5 + relativeTo});
  $("p").css({"width": styleRatio * 25 + relativeTo})

  $("a span").css({
    "border-radius": styleRatio * 10 + relativeTo,
    "border": styleRatio * 0.05 + relativeTo + " solid black",
    "height": styleRatio * 0.75 + relativeTo,
    "margin": "0 " + styleRatio *0.125 + relativeTo + " 0 0",
    "vertical-align": styleRatio * 0.75 + relativeTo,
    "width": styleRatio * 0.75 + relativeTo
  });

  $(".inside").css({
    "height": styleRatio * 0.35 + relativeTo,
    "vertical-align": styleRatio * 0.35 + relativeTo,
    "width": styleRatio * 0.35 + relativeTo
  });
});



$(window).on("mousemove", function(event) {
  var mX = event.pageX,
      mY = event.pageY,
      w = $(window).width(),
      h = $(window).height(),
      s = $("span"),
      c =  $(".inside"),
      a = $("a");
      // rand = 1;

      //1.25vh max
      // console.log("x " + (mX/w*1.25) + " y " + (mY/h*1.25));
      if (!over) {
        c.css({"left": (-1 + (mX/w*2)) + "vw",
                "top": (-1 + (mY/h*2)) + "vh",
                "background": "black"
                });
      }

        a.mouseover(function(){
          over = true;
          $("a").addClass("blur");
          // $("a span.inside").addClass("blur");
          $(".toblur").addClass("blur");
          $(this).addClass("sharpen");

          $(this).find(c).css({"left": -1.25 + "vw",
                               "top": 0.25 + "vh",
                               "height": styleRatio * 1 + relativeTo,
                               "width": styleRatio * 1 + relativeTo,
                               });
        });
        a.mouseout(function(){
          over = false;
          $("a").removeClass("blur");
          // $("a span.inside").removeClass("blur");
          $(".toblur").removeClass("blur");
          $(this).removeClass("sharpen");
          // $(this).removeClass("color--" + rand);
          // $(this).addClass("black");

          $(this).find(c).css({
            // "transition": "0s",
            "height": styleRatio * 0.5 + relativeTo,
            "width": styleRatio * 0.5 + relativeTo
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
  $("a span").append("<span class='inside black'></span>");
  $("a").addClass("black");

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function concreteLayout() {
  var moveSection = $(".section p");

  moveSection.each(function() {
    $(this).css({"margin-left": getRandomInt(1,50) + "vw"});
  });
}
