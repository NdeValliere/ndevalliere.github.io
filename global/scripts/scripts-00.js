//links
//-
$(".link__project").mouseover(function() {
  var filePath = $(this).attr("id");
  $(".grid__row").css({"opacity": "0.1",
                       "transition": "0.5s",
                       "z-index": "-2"});
  $(this).find(".grid__row").css({"opacity": "1",
                                  "z-index": "2"});
  $(".container__preview").append("<img class='container__preview--img' src='global/assets/png/" + filePath + ".png'>");
  if($(window).innerWidth() < 1440) {
    $(".container__preview--img").css({"margin-top": ($(window).innerHeight() - $(".container__preview--img").innerHeight())/2 + "px" });
  }
  if($(window).innerWidth() > 1440) {
    $(".container__preview--img").css({"margin-top": ($(window).innerHeight() - $(".container__preview--img").innerHeight())/6 + "px" });
  }
});

$(".link__project").mouseout(function() {
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

//about link
//-
$(".link__archive").mouseover(function () {
    $(this).find("#about").append("<span id='about__content'></span>");
    var tickr=['&nbsp;hi. this is a small archive of some of my work. click to view the development process.'];
      $('#about__content').t(
      tickr.join(x='<ins>2</ins>')+x,
        {
        speed: 50,
        // speed_vary: true,
        repeat: false,
        mistype: true,
        locale: "en",
        caret: false,
        pause_on_click: true,
      }
    );
});

// $(".grid__row").css({"opacity": "0.3",
//                      "transition": "0.5s"});
// $(this).find(".grid__row").css({"opacity": "1"});

// $(".link__archive").mouseout(function () {
//   $("#about__content").remove();
// $(".grid__row").css({"opacity": "1"});
// });
