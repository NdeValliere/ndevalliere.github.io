//global vars
var IH = window.innerHeight,
    IW = window.innerWidth,
    turnCounter = 1,
    fullTurn = 360;

//show timestamp upper right-hand corner
$(document).ready(function() {
     setInterval(function() {
       var timeStamp = new Date();
       $(".caption--time").html(timeStamp);
     }, 1000);
});

//window scrolling behaviour, animation triggered states
//see here: https://i.stack.imgur.com/ZYynS.png and here: https://stackoverflow.com/questions/4601852/find-the-distance-between-html-element-and-browser-or-window-sides
function getViewportOffset($e) {
  var $window = $(window),
    scrollLeft = $window.scrollLeft(),
    scrollTop = $window.scrollTop(),
    offset = $e.offset();
  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop
  };
}

$(window).on("load scroll resize", function() {
  var scrollTop = $(window).scrollTop(),
      height = $(window).innerHeight(),
      pageL = $(".container__pageL"),
      pageR = $(".container__pageR"),
      filesPush = $(".pushFiles"),
      conT = $(".container__turn"),
      conP = $(".container__pull"),
      tZ = getViewportOffset($(".title--zero")).top,
      tZZ = getViewportOffset($(".title--zero2")).top,
      tA = getViewportOffset($(".title--archive")).top,
      tAb = getViewportOffset($(".title--about")).top,
      xConT = scrollTop/50,
      i = 90;

      console.log("tZZ:" + tZZ + " tZ:" + tZ + " tA:" + tA);

      if (tZ < 50){
          $(".title--zero").addClass("fixed");
      }
      else {
          $(".title--zero").removeClass("fixed");
      }

      if (tA < 50){
          $(".title--archive").addClass("fixed");
          $(".title--zero").removeClass("fixed");
          $(".img--files").each(function(i){
              var imgFiles = $(this);
              //scroll archive files across page
              $(".container__files").addClass("pushFiles");
              imgFiles.animate({marginLeft: "-1.9vw"},
                               {duration: 0, queue: false});
          });
        }
      else {
        $(".title--archive").removeClass("fixed");
      }

      // if (tAb < 50){
      //   $(".title--about").addClass("fixed");
      //   $(".title--archive").removeClass("fixed");
      // }
      // else {
      //   $(".title--about").removeClass("fixed");
      // }

      if (tZZ < -4000) {
        $(".container__about").css({"top": "5vh"})
        setTimeout(function () {
          $(".title--about").addClass("fixed");
          $(".title--archive").removeClass("fixed");
        }, 3000);
      }

      //check if splashpages are past 90deg: grid position
      if (xConT > 90) {
        conT.attr("style", "transform: rotateX(90deg) translate3d(0, 0, 0);");
        pageL.attr("style", "transform: rotateY(4500deg) translate3d(0, 0, 0); border-width: " + scrollTop/200 + "px;");
        pageR.attr("style", "transform:  rotateY(4590deg) translate3d(0, 0, 0); border-width: " + scrollTop/200 + "px;");
        //scroll archive files across page, as container maybe??
        $("body").css({"cursor": "default"});
        setTimeout(function () {
          $(".border").css({"opacity": 1});
        }, 2000);
        setTimeout(function () {
          filesPush.css({"margin-left": "+=" + scrollTop/25 + "px"})
        }, 7000);

        $(document).bind("mousewheel", function(e){
          if (e.originalEvent.wheelDelta >= 0) {
            // console.log("up");
            conP.css({"top": "+=" + scrollTop/25});
          }
          else {
            // console.log("down");
            conP.css({"top": "-=" + scrollTop/25});
          }
        });
      }
      else {
        conT.attr("style", "transform: rotateX(" + xConT + "deg) translate3d(0, 0, 0);");
        pageL.attr("style", "transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 0);");
        pageR.attr("style", "transform:  rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, 0);");
        $("body").css({"cursor": "s-resize"});
        //glitches sometimes going back up, fix??
        $(".border").css({"opacity": 0});

        $(document).bind("mousewheel", function(e){
          if (e.originalEvent.wheelDelta >= 0) {
            // console.log("up");
            conP.css({"top": "500vh"});
          }
          else {
            // console.log("down");
            conP.css({"top": "100vh"});
          }
        });
      }
});
