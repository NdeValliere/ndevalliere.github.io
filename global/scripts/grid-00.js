//Window resize content
//-
$(document).ready(loadContent);
$(window).resize(loadContent);

function loadContent() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12; /*Use 1200px as 100%, 6x6grid*/

    $(".container__grid").css({"margin": gridUnit + "% 0" });
    $(".grid__row").css({"max-width": IW + "px",
                         "padding": "0 " + gridUnit/2 + "%",
                         "margin": gridUnit/-20+ "% auto",
                       });
    $(".grid__col").css({"padding": "0 " + gridUnit/4 + "%" });
    $("hr").css({"max-width": IW + "px",
                 "margin": gridUnit/12 + "% " + gridUnit/4 + "%"});

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"width": (IW/12)*i + "px"});
   }
   setTimeout(position, 500);
}

function position(){
  $(".grid__row").each(function(i){
      var gridRow = $(this);
      setTimeout(function(){
      gridRow.animate({opacity: "1", margin: 100/12/20 + "% auto"},
                      {duration: 100, queue: false})
                      // extra animation with delay
                      // .delay(500).animate({opacity: 0}, {duration: 500});
      },i*100);
  });
}
