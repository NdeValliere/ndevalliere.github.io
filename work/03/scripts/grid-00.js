//Window resize content -
//-
$(document).ready(loadContent);
$(window).resize(loadContent);

var gridUnit = 100/12;

function loadContent() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

		$(".container__grid").css({"width": IW,
                               "margin-top": gridUnit * 1.5+ "%",
                               "margin-bottom": gridUnit * 1.5+ "%"
                             });
    $(".container__grid--absolute").css({ "margin-top": 0,
                                          "padding-top": gridUnit/2 + "%"});
    $(".grid__row").css({"padding": "0 " + gridUnit/2 + "%"});
    $(".page__link--logo").css({"padding-right": gridUnit/2 * 10 + "%"});
    $(".text--rotate").css({"margin-top": gridUnit/2 * -12 + "%"});
    $(".container__process").css({"width": IW });
    $(".process__bar").css({"width": 0 });
    $(".td__img").css({"margin-bottom": -2.1*(IW/16),
                       "padding-top": 2.1*(IW/16)});
    $(".td__border").css({"width": 2*(IW/12) + "px"});

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"width": (IW/12)*i + "px"});
      $(".td__space").css({"width": ($(".container__preview-imgs").innerWidth() - (4 * (IW/12)))/6 });
    }
    setTimeout(fade, 500);
}

function fade(){
$(".grid__row").each(function(i){
   var gridRow = $(this);
   setTimeout(function(){
   gridRow.animate({opacity: "0", margin: 100/12/20 + "% auto"},
                   {duration: 30, queue: false})
                   // extra animation with delay
                   .delay(60).animate({opacity: 1}, {duration: 30});
   },i*30);
});
}
