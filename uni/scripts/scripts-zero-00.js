//Window resize content -
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12; /*Use 1200px as 100%, 6x6grid*/
    $(".container__page").css({"width": IW/2,
                               "height": IH*2});
}

$(document).scroll(function() {
  $(".container__pageL").addClass("page--turnL");
  $(".container__pageR").addClass("page--turnR");
  $(".container__page--centerL").addClass("page--turn-centerL");
  $(".container__page--centerR").addClass("page--turn-centerR");
});
