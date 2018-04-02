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

$("#workco").click(function () {
    $(".process__bar").animate({
				width: window.innerWidth*3
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "workco-01.html";
    });
});

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
$(window).on("scroll", function () {
	var scrollTop     = $(window).scrollTop(),
	    elementOffset = $(".container__process--border").offset().top,
	    distance      = (elementOffset - scrollTop),
			IW						= window.innerWidth,
			IH						= window.innerHeight;

			$(".process__bar").css({"width": (IW - (distance/elementOffset * IW)) + "px"});
});
