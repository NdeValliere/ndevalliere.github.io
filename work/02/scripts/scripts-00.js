//Get random number defined between 2 values
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//About link
//-
$(".page__link--logo").mouseover(function () {
    $(this).find("#about").append("<span id='about__content'></span>");
    var tickr=['&nbsp;hi '];
      $('#about__content').t(
      tickr.join(x='<ins>2</ins>')+x,
        {
        speed: 50,
        // speed_vary: true,
        repeat: false,
        mistype: true,
        locale: "en",
        caret: false,
        pause_on_click: true,
      }
    );
});

//Link hover animations
//-
$(".link__out").mouseover(function() {
  var filePath = $(this).attr("id");

  $(this).removeClass("backgroundHover");
  $(this).addClass("hoverBase");
  $(this).addClass("hover-" + filePath);
});

$(".link__out").mouseout(function() {
  var filePath = $(this).attr("id");

  $(this).removeClass("hoverBase");
  $(this).removeClass("hover-" + filePath);
  $(this).addClass("backgroundHover");
});

//Image link hover animations
//-
$(".td__border").mouseover(function() {
  $(this).find(".td__img").css({"margin-bottom": -0.1*($(window).innerWidth()/16),
                                "padding-top": 0,
                                "transform": "scale(1, 1.1)",
                                "cursor": "pointer"});
});

$(".td__border").mouseout(function() {
  $(this).find(".td__img").css({"margin-bottom": -2.1*($(window).innerWidth()/16),
                                "padding-top": 2.1*($(window).innerWidth()/16),
                                // "transform": "scale(0.1, 0.1)",
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
