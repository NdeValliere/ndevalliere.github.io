//Get random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
		$(".container__grid").css({"width": IW });
}

//Tilt js commands
$('.img__hover').tilt({
    scale: 1.1,
})

//Hover states
$( ".img__hover" )
  .on( "mouseenter", function() {
    $( this ).css({"filter": "grayscale(50%) brightness(0.5)"});
  })
  .on( "mouseleave", function() {
    $( this ).css({"filter": "grayscale(100%) brightness(0.1)"});
  });


//Click-through images
//-
$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/thx_01.png", "../assets/png/thx_02.png","../assets/png/thx_03.png"];
      $('#thx').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='thx--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(0,25) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#thx--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            //some funky shit going down here, adding the console log of the source attr of the img seems to prevent loading resulting in errors, whyyyyyy
            console.log($("#thx--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 4) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});

$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/circles-01.png", "../assets/png/circles-02.png", "../assets/png/circles-03.png"];
      $('#circ').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='circ--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(0,25) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#circ--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#circ--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 4) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});

$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/comic-08.png", "../assets/png/comic-09.png"];
      $('#comic-A').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='comic-A--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#comic-A--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#comic-A--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 3) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});

$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/comic-03.png", "../assets/png/comic-04.png","../assets/png/comic-05.png", "../assets/png/comic-06.png","../assets/png/comic-07.png"];
      $('#comic-B').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='comic-B--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#comic-B--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#comic-B--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 8) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});

$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/comic-01.png", "../assets/png/comic-02.png"];
      $('#comic-C').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='comic-C--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#comic-C--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#comic-C--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 3) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});

$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/poem-02.png", "../assets/png/poem-06.png","../assets/png/poem-07.png"];
      $('#comic-D').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='comic-D--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#comic-D--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#comic-D--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 4) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});

$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/poem-01.png", "../assets/png/poem-03.png"];
      $('#poem-A').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='poem-A--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#poem-A--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#poem-A--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 3) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});


$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/words-04.png", "../assets/png/words-03.png"];
      $('#poem-B').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='poem-B--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#poem-B--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#poem-B--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 3) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});


$(function() {
      var counter = 0;
      var previewIndex = 0;
      var previewImgs = ["../assets/png/poem-04.png", "../assets/png/poem-05.png"];
      $('#poem-C').click(function() {
            counter++;
            $(".container__grid").append( "<section class='img__container--absolute container__hover--" + counter + "'><img id='poem-C--hover' class='img--hover' src=''></section>" );
            $(".img--hover").css({"top": getRandomInt(25,50) + "%",
                                  "left": getRandomInt(25,50) + "%"});
            $("#poem-C--hover").attr("src", previewImgs[previewIndex]);
            $(".container__hover--"+ (counter-1)).remove();
            previewIndex = (previewIndex + 1) % previewImgs.length;
            console.log($("#poem-C--hover").attr("src", previewImgs[previewIndex]));
            if(counter == 3) {
              counter = 0;
              $(".img__container--absolute").remove();
            }
      });
});
