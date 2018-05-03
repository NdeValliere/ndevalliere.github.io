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
      conT = $(".container__turn"),
      // pageLback = $(".container__pageLback"),
      // pageRback = $(".container__pageRback"),
      i = 90,
      turnWhole = scrollTop/fullTurn;

      console.log("scrollTop/turnCounter: " + (turnWhole) + " turnCounter: " + turnCounter);

      conT.attr("style", "-webkit-transform: rotateX(" + scrollTop/100 + "deg) translate3d(0, 0, 0); transform: rotateX(" + scrollTop/100 + "deg) translate3d(0, 0, 0); -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; -ms-transform-style: preserve-3d; transform-style: preserve-3d;	-webkit-perspective: 100vw; -moz-perspective: 100vw; -o-perspective: 100vw;	-ms-perspective: 100vw;	perspective: 100vw; -webkit-perspective-origin: 50vw 50vh; -moz-perspective-origin: 50vw 50vh; -o-perspective-origin: 50vw 50vh; -ms-perspective-origin: 50vw 50vh; perspective-origin: 50vw 50vh; height: 100vh; width: 100vw;	position: fixed; will-change: transform; transition: 2s;");
      pageL.attr("style", "-webkit-transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 0); transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 0); -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; -ms-transform-style: preserve-3d;");
      pageR.attr("style", "-webkit-transform: rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, 0); transform:  rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, 0); -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; -ms-transform-style: preserve-3d;");

      // pageL.attr("style", "-webkit-transform: rotateX(" + scrollTop/100 + "deg) rotateY(" + scrollTop + "deg) rotateZ(" + scrollTop/100 + "deg) translate3d(0, 0, 0); transform: rotateX(" + scrollTop/100 + "deg) rotateY(" + scrollTop + "deg) rotateZ(" + scrollTop/100 + "deg) translate3d(0, 0, 0);");
      // pageR.attr("style", "-webkit-transform: rotateX(" + ((scrollTop/100)+i) + "deg) rotateY(" + (scrollTop+i) + "deg) rotateZ(" + ((scrollTop/100)+i)+ "deg) translate3d(0, 0, 0); transform: rotateX(" + ((scrollTop/100)+i)  + "deg) rotateY(" + (scrollTop+i) + "deg) rotateZ(" + ((scrollTop/100)+i) + "deg) translate3d(0, 0, 0);");

      // pageLback.attr("style", "-webkit-transform: rotateX(" + ((scrollTop/100) - (i/2)) + "deg) rotateY(" + (scrollTop-(i/2)) + "deg) rotateZ(" + ((scrollTop/100) - (i/2)) + "deg) translate3d(0, 0, 0); transform: rotateX(" + ((scrollTop/100) - (i/2)) + "deg) rotateY(" + (scrollTop-(i/2)) + "deg) rotateZ(" + ((scrollTop/100) - (i/2)) + "deg) translate3d(0, 0, 0");
      // pageRback.attr("style", "-webkit-transform: rotateX(" + ((scrollTop/100) - (1.5*i)) + "deg) rotateY(" + (scrollTop-(1.5*i)) + "deg) rotateZ(" + ((scrollTop/100) - (1.5*i)) + "deg) translate3d(0, 0, 0); transform: rotateX(" + ((scrollTop/100) - (1.5*i)) + "deg) rotateY(" + (scrollTop-(1.5*i)) + "deg) rotateZ(" + ((scrollTop/100) - (1.5*i)) + "deg) translate3d(0, 0, 0");

  // if (turnWhole > turnCounter) {
  //   //works for going down but not going back up -- fix later
  //   turnCounter = turnCounter + 1;
  //   fullTurn = fullTurn * 2;
  // }
});
