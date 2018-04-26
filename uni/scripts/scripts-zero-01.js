//GLobal vars
//
var IH = window.innerHeight,
    IW = window.innerWidth,
    zIndex = 1,
    turnCounter = 1,
    fullTurn = 360;

$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop(),
      pageL = $(".container__pageL"),
      pageR = $(".container__pageR"),
      pageLback = $(".container__pageLback"),
      pageRback = $(".container__pageRback"),
      pageImg = $(".container__pageImg"),
      i = 180,
      turnWhole = scrollTop/fullTurn;

      pageL.attr("style", "-webkit-transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 5px); transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 5px);");
      pageLback.attr("style", "-webkit-transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, -5px); transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, -5px);");
      pageR.attr("style", "-webkit-transform: rotateY(" + (scrollTop-(i/2)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px); transform: rotateY(" + (scrollTop-(i/2)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px);");
      pageRback.attr("style", "-webkit-transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px); transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px);");
      pageImg.attr("style", "-webkit-transform: rotateY(" + (scrollTop/2) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px); transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px);");

      if (scrollTop > 2000) {
        pageL.addClass("rotate");
        pageLback.addClass("rotateBack");
        pageR.addClass("rotate");
        pageRback.addClass("rotateBack");
        pageImg.addClass("rotateFast");
      }
});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      setTimeout(function () {
        // $(".container__pageL").addClass("rotate");
        // $(".container__pageR").addClass("rotate");
        // $(".container__pageLback").addClass("rotate");
        // $(".container__pageRback").addClass("rotate");

        $(".container__turn").addClass("shrink");
        $("p").addClass("shrink");
        $(".container__turn").animate({
            height: "500vh"
          }, 3000, function() {
          //thing to do when you animation is finished e.g.
          location.href = "zero-01.html";
        });
      }, 3000); //10s
    }
};
