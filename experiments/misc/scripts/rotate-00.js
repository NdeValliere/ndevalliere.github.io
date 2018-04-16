var IW = window.innerWidth,
    IH = window.innerHeight;

// Apply styles dynamically, read html structure
//-
function rotate3d(sizeY, windowW, windowH) {
  var windowCircles = $("ul");
  var pages;

  $("#container__window ul").each(function(index) {
       $(this).attr("class", "window--" + index);
  });

 for (var j = 0; j<= windowCircles.length; j++) {
   pages = $(".window--" + j ).find("li");
   for (var i = 0; i <= pages.length; i++) {
     // $("ul.window--"+ j).css({"z-index": j * (-1)});
     $("ul.window--"+ j +" li:nth-child("+ i +")").css({"transform": "translate(-50%, -50%) rotate(" + (360/(pages.length)) * (i-1) + "deg) translateY(-" + sizeY*(j+1) + "px) rotateX(90deg)"});
     $("ul.window--"+ j +" li:nth-child("+ i +")").find(".window__border").css({"background-image": "url(../assets/gifs/" + getRandomInt(1,12) + ".gif)",
                                                                                "background-blend-mode": "multiply"});
     $("ul.window--"+ j).find(".window__border").css({"width": windowW*(j+1) + "px",
                                                      "height": windowH*(j+1) + "px",
                                                      "background-size": windowW*(j+1)});
   }
 }
}

$(window).resize(rotate3d(IW/4, IW/30, IH/10));


//get random number
//-
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Next step below: ATTEMPT to create all elements dynamically - no reading of the html elements and applying styles
// ^ might be too ambitious for vanilla js
// ^ try with react?

// function rotate3d(windowCircles, pages, sizeY, windowW, windowH) {
//   var listItem;
//
//   for (var i = 0; i <= windowCircles; i++) {
//     $("#container__3d").append("<ul id='windows' class='windows--" + i + "'></ul>");
//     $("ul.windows--"+ windowCircles).append("<li class='container__page'></li>");
//     listItem = $("ul.windows--" + windowCircles + " li");
//   }
//   for (var i = 0; i <= pages; i++) {
//     append("<li class='container__page page--'"+ i + "</li>");
//     for (var j = 0; listItem.length; j++) {
//       listItem[j].append("<input type='checkbox' value='dot' id='filter-dot' class='filter-dot'>" +
//                           "<label for='filter-dot' class='css-label'></label>" +
//                           "<div class='window__border'></div>" +
//                           "<label class='window__timestamp'>test</label>");
//     }
//   }
// }
