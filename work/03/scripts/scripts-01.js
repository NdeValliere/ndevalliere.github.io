//Linking projects
//-
$("#home").click(function () {
	$(".process__bar").animate({
			width: window.innerWidth*3
	}, 2000, function() {
		//thing to do when you animation is finished e.g.
		location.href = "index-01.html";
	});
});

// $("#sketches").click(function () {
// 	$(".process__bar").animate({
// 			width: window.innerWidth*3
// 	}, 2000, function() {
// 		//thing to do when you animation is finished e.g.
// 		location.href = "index-01.html#sketches";
// 	});
// });

// $("#workco").click(function () {
//     $(".process__bar").animate({
// 				width: window.innerWidth*3
//     }, 2000, function() {
//       //thing to do when you animation is finished e.g.
//       location.href = "workco-01.html";
//     });
// });

$("#ia").click(function () {
    $(".process__bar").animate({
				width: window.innerWidth*3
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "ia-01.html";
    });
});

$("#stackmap").click(function () {
    $(".process__bar").animate({
				width: window.innerWidth*3
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "stackmap-01.html";
    });
});

//Scroll-through code for process bar
//-
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

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
});
