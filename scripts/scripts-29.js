//Math tools
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Window resizing tools
//-
var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$(".container__grid").css({"width": IW,
                               "height": IH});

    $(".quote--center").css({"padding-top": IH/2});
});

$(document).ready(resize);
$(window).resize(resize);


$(document).ready(function() {
  //hide content before cycling through it onclick
  for (var i = 2; i < 23; i++) {
    $(".container__grid--"+ i).css({"visibility": "hidden"});
  }

  var counter = 1;
  $( "html" ).click(function() {
      counter++;
      $(".container__grid--"+ (counter-1) ).css({"visibility": "hidden"});
      $(".container__grid--"+ counter ).css({"visibility": "visible"});
      // console.log("click" + counter);
  });
});
