var triggerAbout = true,
    triggerEvents = true;

$("#cognateBlack").click(function() {
    $("#animateBlack").attr("begin", 0);
    $(".link__page").css({"cursor": "pointer"});
    $(".link__page--logo").css({"cursor": "url('../assets/png/gasp.png'), pointer"});
});

$(".link__page--nav-about").click(function() {
    triggerAbout = false;
    $(".link__page--nav-about").css({"padding-right": "1000px",
                 "transform": "rotateY(180deg)",
                 "background-color": "white"});
    $(".container__details--about").css({"opacity": 1});
   if (!triggerEvents) {
     $(".link__page--nav-events").css({"padding-right": 0,
                  "transform": "rotateY(0deg)",
                  "background-color": "rgba(255,255,255,0)"});
      $(".container__details--events").css({"opacity": 0});
      triggerEvents = true;
   }
});

$(".link__page--nav-events").click(function() {
    triggerEvents = false;
    $(".link__page--nav-events").css({"padding-right": "1000px",
                 "transform": "rotateY(180deg)",
                 "background-color": "white"});
    $(".container__details--events").css({"opacity": 1});
   if (!triggerAbout) {
     $(".link__page--nav-about").css({"padding-right": 0,
                  "transform": "rotateY(0deg)",
                  "background-color": "rgba(255,255,255,0)"});
      $(".container__details--about").css({"opacity": 0});
      triggerAbout = true;
   }
});

$(".link__page--nav-about").mouseover(function() {
  if (triggerAbout) {
    $(this).css({"transform": "rotateY(180deg)"});
  }
});
$(".link__page--nav-about").mouseout(function() {
  if (triggerAbout) {
    $(this).css({"transform": "rotateY(0deg)"});
  }
});

$(".link__page--nav-events").mouseover(function() {
  if (triggerEvents) {
    $(this).css({"transform": "rotateY(180deg)"});
  }
});
$(".link__page--nav-events").mouseout(function() {
  if (triggerEvents) {
    $(this).css({"transform": "rotateY(0deg)"});
  }
});
