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
      pageL.attr("style", "-webkit-transform: rotateX(" + scrollTop/100 + "deg) rotateY(" + scrollTop + "deg) rotateZ(" + scrollTop/100 + "deg) translate3d(0, 0, 0); transform: rotateX(" + scrollTop/100 + "deg) rotateY(" + scrollTop + "deg) rotateZ(" + scrollTop/100 + "deg) translate3d(0, 0, 0);");
      pageR.attr("style", "-webkit-transform: rotateX(" + ((scrollTop/100)+i) + "deg) rotateY(" + (scrollTop+i) + "deg) rotateZ(" + ((scrollTop/100)+i)+ "deg) translate3d(0, 0, 0); transform: rotateX(" + ((scrollTop/100)+i)  + "deg) rotateY(" + (scrollTop+i) + "deg) rotateZ(" + ((scrollTop/100)+i) + "deg) translate3d(0, 0, 0);");
      // pageR.attr("style", "-webkit-transform: rotateY(" + (scrollTop-(i/2)) + "deg) rotateZ(" + (scrollTop-(i/2))/100 + "deg) translate3d(0, 0, 0); transform: rotateY(" + (scrollTop-(i/2)) + "deg) rotateZ(" + (scrollTop-(i/2))/100 + "deg) translate3d(0, 0, 0");
      // pageRback.attr("style", "-webkit-transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) rotateX(" + (scrollTop-(1.5*i))/100 + "deg) translate3d(0, 0, 0); transform: rotateY(" + (scrollTop-(1.5*i)) + "deg) rotateX(" + (scrollTop-(1.5*i))/100 + "deg) translate3d(0, 0, 0");

  // if (turnWhole > turnCounter) {
  //   //works for going down but not going back up -- fix later
  //   turnCounter = turnCounter + 1;
  //   fullTurn = fullTurn * 2;
  // }
});
