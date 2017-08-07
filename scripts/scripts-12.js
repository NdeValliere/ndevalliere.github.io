var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("body").css({"height": 100000000000*IH,
									 "width": IW});
		$("h1").css({"top": IH/2.15,
								 "left": IW/2.35});
  });

$(document).ready(resize);
$(window).resize(resize);


$( window ).scroll(function( event ) {

	$(".title--1").css({"letter-spacing": "+=8px",
                      "left": "+=" + (-40) + "px"});
   if ($(window).scrollTop() > 3000) {
    $(".title--1").css({"opacity": "+=" + (-0.01)});
    $(".title--2").css({"letter-spacing": "+=8px",
                        "left": "+=" + (-40) + "px",
                        "opacity": 1
  							});
              }
    if ($(window).scrollTop() > 6000) {
     $(".title--2").css({"opacity": "+=" + (-0.01)});
     $(".title--3").css({"letter-spacing": "+=8px",
                         "left": "+=" + (-40) + "px",
                         "opacity": 1
   							});
               }
     if ($(window).scrollTop() > 9000) {
      $(".title--3").css({"opacity": "+=" + (-0.01)});
      $(".title--4").css({"letter-spacing": "+=8px",
                          "left": "+=" + (-40) + "px",
                          "opacity": 1
                 });
                }
    if ($(window).scrollTop() > 12000) {
     $(".title--4").css({"opacity": "+=" + (-0.01)});
     $(".title--5").css({"letter-spacing": "+=8px",
                         "left": "+=" + (-40) + "px",
                         "opacity": 1
                 });
               }
   if ($(window).scrollTop() > 18000) {
    $(".title--5").css({"opacity": "+=" + (-0.01)});
    $(".title--6").css({"letter-spacing": "+=8px",
                        "left": "+=" + (-40) + "px",
                        "opacity": 1
               });
              }

});
