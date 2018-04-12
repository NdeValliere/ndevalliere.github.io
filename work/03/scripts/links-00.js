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
