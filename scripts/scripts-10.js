var triggerAbout = true,
    triggerEvents = true;

$("#cognateBlack").click(function() {
    $("#animateBlack").attr("begin", 0);
    $(".link__page").css({"cursor": "pointer"});
    $(".link__page--logo").css({"cursor": "url('../assets/png/gasp.png'), pointer"});
});

$(".link__page--nav-about").click(function() {
    triggerAbout = false;
    $(this).css({"padding-right": "100%",
                 "transform": "rotateY(180deg)",
                 "background-color": "white"});
    $(".link__page--nav-about").css({"padding-right": 0});
});

$(".link__page--nav-events").click(function() {
    triggerEvents = false;
    $(this).css({"padding-right": "100%",
                 "transform": "rotateY(180deg)",
                 "background-color": "white"});
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
