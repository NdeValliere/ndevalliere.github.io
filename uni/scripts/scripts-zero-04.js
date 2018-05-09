var isAttached = false,
    conScroll =  $("#container__appendScroll"),
    zIsFixed = false,
    aIsFixed = false,
    abIsFixed = false,
    moveImg = false,
    transitionEnd = false;


//show timestamp upper right-hand corner
$(document).ready(function() {
  // console.log("detaching once!");
  conScroll.detach();
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
    //repetitive, fix??
    scrollTop = $window.scrollTop(),
    offset = $e.offset();
  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop
  };
}

function scrollRotate() {
      //repetitive, fix??
  var scrollTop = $(window).scrollTop(),
      height = $(window).innerHeight(),
      pageL = $(".container__pageL"),
      pageR = $(".container__pageR"),
      conT = $(".container__turn"),
      xConT = scrollTop/50,
      i = 90;

      console.log("scrollTop: " + scrollTop);
      //check if splashpages are past 90deg: grid position
      if (xConT > 90) {
        conT.attr("style", "transform: rotateX(90deg) translate3d(0, 0, 0);");
        pageL.attr("style", "transform: rotateY(4500deg) translate3d(0, 0, 0);");
        pageR.attr("style", "transform:  rotateY(4590deg) translate3d(0, 0, 0);");
        $("body").css({"cursor": "default"});

        conT.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          if (!transitionEnd) {
            transitionEnd = true;
          }
        });

        if (transitionEnd) {
          $(".border").css({"opacity": 1});
          if(!isAttached) {
            conScroll.appendTo(".container__append");
            isAttached = true;
            transitionEnd = false;
            // moveContainer();
          }
        }
      }

      if (xConT < 90) {
        conT.attr("style", "transform: rotateX(" + xConT + "deg) translate3d(0, 0, 0);");
        pageL.attr("style", "transform: rotateY(" + scrollTop + "deg) translate3d(0, 0, 0);");
        pageR.attr("style", "transform:  rotateY(" + (scrollTop+i) + "deg) translate3d(0, 0, 0);");
        $("body").css({"cursor": "s-resize"});

        //glitches, fix??
        $(".border").css({"opacity": 0});
        if(isAttached) {
          conScroll.detach();
          isAttached = false;
          zIsFixed = false;
        }
      }
}

$(window).on("load scroll", function() {
      //repetitive, fix??
  var scrollTop = $(window).scrollTop();
  console.log(scrollTop);

  //title zero
  if (scrollTop > 6150) {
    zIsFixed = true;
  }
  if (scrollTop < 6150) {
    zIsFixed = false;
  }
  if (zIsFixed) {
    fixTitle();
  }
  if (!zIsFixed) {
    unfixTitle();
  }

  //title about
  if (scrollTop > 7917) {
    aIsFixed = true;
  }
  if (scrollTop < 7917) {
    aIsFixed = false;
  }
  if (aIsFixed) {
    fixTitleA();
    //scrolling images in
    moveContainer();
  }
  if (!aIsFixed) {
    unfixTitleA();
    //unscrolling images
    unmoveContainer();
  }

  //scrolling img
  if (scrollTop > 8680) {
    moveImg = true;
  }
  if (scrollTop < 8680) {
    moveImg = false;
  }
  if (moveImg) {
    moveImgs();
  }
  if (!moveImg) {
    unmoveImgs();
  }

  //title archive
  if (scrollTop > 9770) {
    abIsFixed = true;
  }
  if (scrollTop < 9770) {
    abIsFixed = false;
  }
  if (abIsFixed) {
    fixTitleAb();
  }
  if (!abIsFixed) {
    unfixTitleAb();
  }

  scrollRotate();
});

//layer 1
function fixTitle() {
    $(".container__download--title").addClass("fixed");
    $(".title--zero").addClass("title--fix");
}
function unfixTitle() {
    $(".container__download--title").removeClass("fixed");
    $(".title--zero").removeClass("title--fix");
}

//layer 2
function fixTitleA() {
    $(".container__archive--title").addClass("fixed");
    $(".title--archive").addClass("title--fix");
    $(".title--zero").addClass("title--fixPush");
}
function unfixTitleA() {
    $(".container__archive--title").removeClass("fixed");
    $(".title--archive").removeClass("title--fix");
    $(".title--zero").removeClass("title--fixPush");
}

function moveContainer() {
  var IW = $(window).innerWidth(),
      archiveWidth = $(".container__archive--1").innerWidth(),
      imgMove = $("#imgMove").innerWidth();

  $(".container__archive--1").css({"margin-left": (IW/2 - archiveWidth + imgMove/2) + "px"});
}

function unmoveContainer() {
  $(".container__archive--1").css({"margin-left": "-110vw"});
}

function moveImgs() {
  $(".container__archive--1").addClass("moveImgs");
}

function unmoveImgs() {
  $(".container__archive--1").removeClass("moveImgs");
}

//layer 3
function fixTitleAb() {
    $(".container__about--title").addClass("fixed");
    $(".title--about").addClass("title--fix");
    $(".title--archive").addClass("title--fixPush");
}
function unfixTitleAb() {
    $(".container__about--title").removeClass("fixed");
    $(".title--about").removeClass("title--fix");
    $(".title--archive").removeClass("title--fixPush");
}
