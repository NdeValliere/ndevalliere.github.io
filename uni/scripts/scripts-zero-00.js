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
      i = 180,
      turnWhole = scrollTop/fullTurn;

      console.log("scrollTop/turnCounter: " + (turnWhole) + " turnCounter: " + turnCounter);

      $(".container__turn").css({"height": "500vh"});
      // pageL.attr("style", "-webkit-transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 5px); transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 5px);");
      // pageLback.attr("style", "-webkit-transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, -5px); transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, -5px);");
      pageR.attr("style", "-webkit-transform: rotateY(" + (scrollTop-(i/2)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px); transform: rotateY(" + (scrollTop-(i/2)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px);");
      pageRback.attr("style", "-webkit-transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px); transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) translate3d(0px, " + scrollTop/50 + "px, 0px);");

  if (turnWhole > turnCounter) {
    //works for going down but not going back up -- fix later
    turnCounter = turnCounter + 1;
    fullTurn = fullTurn * 2;
  }

  if (turnWhole < 0.25) {
    pageL.attr("style", "-webkit-transform: rotateY(" + scrollTop + "deg) translate3d(0, " + scrollTop/50 + "px, 5px); transform: rotateY(" + scrollTop + "deg) translate3d(0, " + scrollTop/50 + "px, 5px); z-index: 2;");
    pageLback.attr("style", "-webkit-transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, " + scrollTop/50 + "px, -5px); transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, " + scrollTop/50 + "px, -5px); z-index: 1;");
  }

  if (turnWhole > 0.25) {
    pageL.attr("style", "-webkit-transform: rotateY(" + scrollTop + "deg) translate3d(0, " + scrollTop/50 + "px, 5px); transform: rotateY(" + scrollTop + "deg) translate3d(0, " + scrollTop/50 + "px, 5px); z-index: 1;");
    pageLback.attr("style", "-webkit-transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, " + scrollTop/50 + "px, -5px); transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, " + scrollTop/50 + "px, -5px); z-index: 2;");
  }
});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      setTimeout(function () {
        $(".container__turn").animate({
            height: "500vh",
            width: 0,
            left: "50vw",
            right: "50vw"
          }, 3000, function() {
          //thing to do when you animation is finished e.g.
          location.href = "zero-01.html";
        });
      }, 3000); //10s
    }
};
