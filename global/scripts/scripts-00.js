//links
//-
$("a").mouseover(function() {
  var filePath = $(this).attr("id");
  $(".grid__row").css({"opacity": "0.1",
                       "transition": "0.5s",
                       "z-index": "-2"});
  $(this).find(".grid__row").css({"opacity": "1",
                                  "z-index": "2"});
  $(".container__preview").append("<img class='container__preview--img' src='global/assets/png/" + filePath + ".png'>");
});

$("a").mouseout(function() {
  $(".grid__row").css({"opacity": "1"});
  $(".container__preview--img").remove();
});

// $(this).find(".grid__col--tags").css({"opacity": "1"});
// $(this).find(".divider__project").css({"border-color": "#0000ff"});
// $("body").append("<embed class='container__preview' src='https://ndevalliere.github.io/pages/index--portfolio05.html'>");

//get random number
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//float effect
//-
$(document).ready(function() {
    function loop() {
        $( ".container__preview" ).animate({
          marginLeft: getRandomInt(-2.5,2.5) + "px",
        }, 1000, function() {
          loop();
        });
      }
    loop();
});
