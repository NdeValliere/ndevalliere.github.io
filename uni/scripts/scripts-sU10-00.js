//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12; /*Use 1200px as 100%, 6x6grid*/
    $(".grid__row").css({"max-width": IW + "px",
                         "padding": "0 " + gridUnit*1.5 + "%",
                         "margin": gridUnit/40 + "% auto"});
    $("hr").css({"max-width": IW + "px",
                 "margin": gridUnit/12 + "% " + gridUnit/20 + "%"});
    $(".grid__row").css({"max-width": IW + "px" });
    $(".grid__col").css({"padding": "0 " + gridUnit/40 + "%" });
}