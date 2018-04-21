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
  var pageX = IW *0.3,
      pageY = IH * 0.9,
      gutter = IH * 0.025,
      mX = IH * 0.8,
      minX = IW * 0.2,
      mY = pageY,
      minY = IH * gutter/2;

  var letters = $("p");

 $("body").css({"width": IW });
 $(".container__zero").css({"width": pageX*2 + gutter,
                            "height": pageY,
                            "padding": gutter*2 + "px 0"});

 $(".page__zero").css({"width": pageX,
                       "height": pageY });
 $(".page__zero").eq(0).css({"margin-right": gutter/2 });

 for(var i = 0; i <= letters.length; i++) {
   $("p").eq(i).css({"font-size": getRandomInt(1, 750) + "px",
                     "top": getRandomInt(0, (mX) ),
                     "left": getRandomInt(0, (mY/2) )
                   });
   $("p").eq(i).addClass("font--" + getRandomInt(1,6));
 }
}
layoutRandom();
