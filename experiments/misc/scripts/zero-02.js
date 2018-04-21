var IW = window.innerWidth,
    IH = window.innerHeight;

//get random number
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//randomise layout
//-
function layoutRandom () {
  var x1 = getRandomInt((0.2*IW), (0.8*IW)),
      y1 = getRandomInt((0.005*IH), (0.9*IH)),
      x2 = getRandomInt((0.2*IW), (0.8*IW)),
      y2 = getRandomInt((0.005*IH), (0.9*IH)),
      x3 = getRandomInt((0.2*IW), (0.8*IW)),
      y3 = getRandomInt((0.005*IH), (0.9*IH)),
      x4 = getRandomInt((0.2*IW), (0.8*IW)),
      y4 = getRandomInt((0.005*IH), (0.9*IH));

 $(".container__zero").css({"width": IW*0.8 + "px",
                            "height": IH*0.9 + "px",
                            "padding": 0.05*IH + "px " + 0.2*IW + "px" });
 $(".page__zero").css({"width": IW * 0.3,
                       "height": IH * 0.9});
 $(".img__z").css({"left": x1 + "px",
                      "top": y1 + "px"});
 $(".img__e").css({"left": x2 + "px",
                   "top": y2 + "px"});
 $(".img__r").css({"left": x3 + "px",
                   "top": y3 + "px"});
 $(".img__0").css({"left": x4 + "px",
                   "top": y4 + "px"});

 $(".img__z").attr("src", "../assets/zero/z-" + getRandomInt(1,6) + ".png");
 $(".img__e").attr("src", "../assets/zero/e-" + getRandomInt(1,4) + ".png");
 $(".img__r").attr("src", "../assets/zero/r-" + getRandomInt(1,5) + ".png");
 $(".img__0").attr("src", "../assets/zero/o-" + getRandomInt(1,5) + ".png");

 $(".img__z").css({"max-width": getRandomInt(50, 500) + "px"});
 $(".img__e").css({"max-width": getRandomInt(50, 500) + "px"});
 $(".img__r").css({"max-width": getRandomInt(50, 500) + "px"});
 $(".img__0").css({"max-width": getRandomInt(50, 1000) + "px"});

}

layoutRandom();
