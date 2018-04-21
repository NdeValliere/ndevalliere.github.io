function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth,
        lettersRow = $(".letter--z"),
        lettersAmount = lettersRow.length/2,
        rows = $(".rect__move"),
        rowsAmount = rows.length;

    // position everything first
    $(".container__grid").css({"width": IW,
                               "height": IH});
    $(".grid__row").css({"margin-top": (IH - $(".grid__row").innerHeight())/2});
    $(".grid__rect").css({"width": $(".letter").innerWidth()/2,
                          "height": $(".letter").innerHeight()/2});

    //after positioning is done, add transforms
    setTimeout(function () {
      $("body").css({"opacity": 1})
      $(".letter").css({"position": "absolute"});
      $(".letter--left").css({"transform": "rotate(-90deg)",
                              "left": 0});
      $(".letter--right").css({"transform": "rotate(90deg)",
                               "right": 0});

      for (var j = 0; j < rowsAmount; j++) {
        for (var i = 0; i < lettersAmount; i++){

          if (j%2 == 0) {
            $(".rect__move").eq(j).find(".letter--left").eq(lettersAmount-1-i).css({"left": i * -1});
            $(".rect__move").eq(j).find(".letter--right").eq(i).css({"right": i * -1});
          }
          if (j%3 == 0) {
            $(".rect__move").eq(j).find(".letter--left").eq(lettersAmount-1-i).css({"left": i * -3});
            $(".rect__move").eq(j).find(".letter--right").eq(i).css({"right": i * -3});
          }
          else {
            $(".rect__move").eq(j).find(".letter--left").eq(lettersAmount-1-i).css({"left": i * -9});
            $(".rect__move").eq(j).find(".letter--right").eq(i).css({"right": i * -9});
          }
        }
      }
    }, 5000);

    setTimeout(function() {
      staggerAnimations();
    }, 10000)
});
$(document).ready(resize);
$(window).resize(resize);

// $(".rect__move").eq(j).find(".letter--right").eq(i).css({"right": "-=" + i * -5 + "px"});

function staggerAnimations(){
  // $("")
  TweenMax.staggerTo(".letter--left.letter--z", 0.5, {left:"-=200", ease:Back.easeIn, repeat: 10}, 0.1);
  TweenMax.staggerTo(".letter--left.letter--e", 0.5, {left:"-=200", ease:Back.easeIn, repeat: 10}, 0.1);
  TweenMax.staggerTo(".letter--left.letter--r", 0.5, {left:"-=200", ease:Back.easeIn, repeat: 10}, 0.1);
  TweenMax.staggerTo(".letter--left.letter--o", 0.5, {left:"-=200", ease:Back.easeIn, repeat: 10}, 0.1);

  TweenMax.staggerTo(".letter--right.letter--z", 0.5, {left:"+=200", ease:Back.easeIn, repeat: 10}, 0.1);
  TweenMax.staggerTo(".letter--right.letter--e", 0.5, {left:"+=200", ease:Back.easeIn, repeat: 10}, 0.1);
  TweenMax.staggerTo(".letter--right.letter--r", 0.5, {left:"+=200", ease:Back.easeIn, repeat: 10}, 0.1);
  TweenMax.staggerTo(".letter--right.letter--o", 0.5, {left:"+=200", ease:Back.easeIn, repeat: 10}, 0.1);
};

// $(".container__grid").mouseover(function() {
//   console.log("test");
//   $(".letter--left").css({"left": "-=20px"});
//   $(".letter--right").css({"right": "-=20px"});
// });
//
// $(".container__grid").mouseout(function() {
//   console.log("test");
//   $(".letter--left").css({"left": "+=20px"});
//   $(".letter--right").css({"right": "+=20px"});
// });
