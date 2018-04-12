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
     $("ul.window--"+ j +" li:nth-child("+ i +")").css({"transform": "translate(-50%, -50%) rotate(" + (360/(pages.length)) * (i-1) + "deg) translateY(-" + sizeY*(j+1) + "px) rotateX(90deg)"});
     $("ul.window--"+ j).find(".window__border").css({"width": windowW*(j+1) + "px",
                                                      "height": windowH*(j+1) + "px" });
   }
 }
}

$(window).resize(rotate3d(IW/5, IW/10, IH/12));


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
