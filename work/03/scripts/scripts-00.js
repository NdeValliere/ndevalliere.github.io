//Image link hover animations
//-
$(".td__border").mouseover(function() {
  $(this).find(".td__img").css({"margin-bottom": -0.1*($(window).innerWidth()/16),
                                "padding-top": 0,
                                "visibility": "visible",
                                "cursor": "pointer"});
});

$(".td__border").mouseout(function() {
  $(this).find(".td__img").css({"margin-bottom": -2.1*($(window).innerWidth()/16),
                                "padding-top": 2.1*($(window).innerWidth()/16),
                                "visibility": "hidden",
                                "cursor": "default"});
});

//Linking projects from index
//-
$("#workco").click(function () {
    $(".process__bar").animate({
				width: window.innerWidth*3
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "workco-01.html";
    });
});

$("#ia").click(function () {
    $(".process__bar").animate({
				width: window.innerWidth*3
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "ia-01.html";
    });
});

$("#stackmap").click(function () {
    $(".process__bar").animate({
				width: window.innerWidth*3
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "stackmap-01.html";
    });
});
