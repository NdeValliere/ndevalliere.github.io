//Window resize content
//-
$(document).ready(loadContent);
$(window).resize(loadContent);

function loadContent() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12; /*Use 1200px as 100%, 6x6grid*/

    $(".container__grid").css({"margin": gridUnit + "% 0" });
    $(".grid__row").css({"max-width": IW
                         // "padding": "0 " + gridUnit/2 + "%",
                         // "margin": gridUnit/-20+ "% auto",
                       });
    $(".grid__col").css({"margin": "0 " + 5/14.4 + "%" });
    $("hr").css({"max-width": IW});

    $(".grid__row").each(function(){
      $(this).find(".grid__col:first-child").css({"margin-left": 0});
      $(this).find(".grid__col:last-child").css({"margin-right": 0});
    });

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"width": (IW/12)*i});
   }
}
