function findReplaceZ() {
  for (var i = 1; i < 30; i++) {
     $(".img__z").replaceWith("<img class='z' src='../assets/zero/z-" + i + ".png'>");
     // console.log("replacing" + i);
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateZ() {
  var i = setInterval(function(){
    i++;
    if (i > 48) {
      i = 1;
    }
  }, getRandomInt(0,500))

  //test
  var timeout = setInterval(function(){
    $(".z").eq(i).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");
    $(".z").eq(i+getRandomInt(1, (48-1))).attr("src", "../assets/zero/z-" + getRandomInt(1,48) + ".png");

  }, getRandomInt(0,100))
}

findReplaceZ();
animateZ();

// function findReplaceZ() {
//   var text = $(".grid__text");
//
//   if(text.indexOf("z") > -1) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
