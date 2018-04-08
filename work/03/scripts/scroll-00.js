// Create jQuery Method
jQuery.fn.isFullyVisible = function(){

var win = $(window);

var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var elemtHeight = this.height();// Get the full height of current element
elemtHeight = Math.round(elemtHeight);// Round it to whole humber

var bounds = this.offset();// Coordinates of current element
bounds.top = bounds.top + elemtHeight;
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}

//Get random number defined between 2 values
//-
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}


function popup (i) {
  $(".td__img--" + i).css({"margin-bottom": -0.1*($(window).innerWidth()/16),
                           "padding-top": 0,
                           "visibility": "visible",
                           "cursor": "pointer"
                        });
  setTimeout(function(){
    $(".td__img--" + i).css({"margin-bottom": -2.1*($(window).innerWidth()/16),
                             "padding-top": 2.1*($(window).innerWidth()/16),
                             "visibility": "hidden",
                             "cursor": "default"
                            });
    },3500);
  }

//Scroll-through code for process bar
//-
$(window).on("scroll", function() {
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $(".container__process--border").offset().top,
      distance      = (elementOffset - scrollTop),
      IW						= window.innerWidth,
      PW            = (IW - (distance/elementOffset * IW)),
      PWround       = precisionRound(PW, 0);

  if (PWround % 3 == 0) {
    $(".process__bar").css({"width": PWround + "px"});
    console.log(PWround);
  }

  if( $(".container__sketches").isFullyVisible() ){
    popup(getRandomInt(1,100));
  }

  if( $(".container__grid--2").isFullyVisible() ){
    $(".container__grid--2").css({ "opacity": "1"});
    $(".container__grid--3").css({ "opacity": "0.01"});
    $(".container__grid--4").css({ "opacity": "0.01"});
    $(".container__grid--5").css({ "opacity": "0.01"});
    $(".container__grid--6").css({ "opacity": "0.01"});

  }
  if( $(".container__grid--3").isFullyVisible() ){
    $(".container__grid--3").css({ "opacity": "1"});
    $(".container__grid--2").css({ "opacity": "0.01"});
    $(".container__grid--4").css({ "opacity": "0.01"});
    $(".container__grid--5").css({ "opacity": "0.01"});
    $(".container__grid--6").css({ "opacity": "0.01"});

  }
  if( $(".container__grid--4").isFullyVisible() ){
    $(".container__grid--4").css({ "opacity": "1"});
    $(".container__grid--2").css({ "opacity": "0.01"});
    $(".container__grid--3").css({ "opacity": "0.01"});
    $(".container__grid--5").css({ "opacity": "0.01"});
    $(".container__grid--6").css({ "opacity": "0.01"});

  }
  if( $(".container__grid--5").isFullyVisible() ){
    $(".container__grid--5").css({ "opacity": "1"});
    $(".container__grid--2").css({ "opacity": "0.01"});
    $(".container__grid--3").css({ "opacity": "0.01"});
    $(".container__grid--4").css({ "opacity": "0.01"});
    $(".container__grid--6").css({ "opacity": "0.01"});

  }
  if( $(".container__grid--6").isFullyVisible() ){
    $(".container__grid--6").css({ "opacity": "1"});
    $(".container__grid--2").css({ "opacity": "0.01"});
    $(".container__grid--3").css({ "opacity": "0.01"});
    $(".container__grid--4").css({ "opacity": "0.01"});
    $(".container__grid--5").css({ "opacity": "0.01"});

  }
});
