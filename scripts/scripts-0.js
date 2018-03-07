//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

    $(".grid__row").css({"max-width": IW + "px" });
    $("hr").css({"max-width": IW + "px" });

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"max-width": (IW/12)*i + "px"});
   }
}
