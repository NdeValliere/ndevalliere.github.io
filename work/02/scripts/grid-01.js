//Window resize content -
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12;

  $(".grid__row").css({"padding": "0 " + gridUnit + "%"});
  $(".grid__row--intro").css({"padding": "0 " + gridUnit/2 + "%"});
  $("hr").css({"width": IW});
  $(".container__grid--absolute").css({"padding-top": gridUnit/2 + "%"});
  $(".page__link--logo").css({"padding-right": gridUnit/2 * 10 + "%"});
  $(".text--rotate").css({"margin-top": gridUnit/2 * -12 + "%"});
  $(".container__grid").css({"width": IW,
                             "padding-top": gridUnit/2+ "%"
                           });


  for( var i = 0; i < 13; i++) {
     $(".grid__col--"+ i ).css({"width": (IW/12)*i + "px"
                                // "max-width":(1320/12)*i + "px"
                                });
  }
  $(".grid__col--2-i").css({"width": (IW/12)*2 + "px"});
  $(".grid__col--8-i").css({"width": (IW/12)*8 + "px"});
  $(".container__grid--preview").css({"padding": gridUnit + "% 0"});
}
