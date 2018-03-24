//Math tools
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Window resizing tools
//-
var IH = window.innerHeight,
    IW = window.innerWidth;
var resize = (function () {
		$(".container__grid").css({"width": IW *0.9,
                               "height": IH});

    // $(".grid__col").css({"height": IH});
    $(".grid__col--12").css({"max-width": IW*0.9});

    $(".quote--center").css({"padding-top": IH/2});
    $(".img__windowHeight").css({"height": IH});


    // var img = document.getElementById("img__center");
    // img.onload = function() {
    //   $("#img__center").css({"padding-left": (IW - img.width)/2,
    //                          "padding-right": (IW - img.width)/2});
    //   // console.log((IW - img.width)/2);
    // }
});

$(document).ready(resize);
$(window).resize(resize);

//Click-through code
//-
$(document).ready(function() {
  //hide content before cycling through it onclick
  // for (var i = 2; i < 50; i++) {
  //   $(".container__grid--"+ i).css({"left": IW*0.9});
  // }

  var counter = 1;

  $( "html" ).click(function() {
      counter++;
      // console.log("counter: " + counter + "next: " + (counter+1));
      $(".container__grid--"+ counter).css({"visibility": "visible"});
      $(".container__grid--"+ counter).css({"left": 0});
      $(".container__grid--"+ (counter+2)).css({"left": IW*1.8 });
      $(".container__grid--"+ (counter+1)).css({"visibility": "visible",
                                                "left": IW*0.9});
      $(".container__grid--"+ (counter-1) ).css({ "left": -IW*0.9,});

      // $(".quote--"+ (counter-1) ).css({"margin-top": -IH});
      // $("body").css({"cursor": "url('../assets/png/clickHere-" + getRandomInt(1,5) + ".png'), auto"});
  });
});

// $(window).load(function(){
//   $("#test").css({"padding-left": (IW - ($("#test").width))/2,
//                   "padding-right": (IW - ($("#test").width))/2});
//   console.log($("#test").width);
// });
