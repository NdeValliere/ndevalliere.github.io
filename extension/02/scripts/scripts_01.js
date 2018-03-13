$(function(){

	// console.log('%c           \n  /^  /^   \n (	     \\ \n |  O   0| \n \\         \n   \\___V-/ \n           \n', 'background: lightgreen; color: white');


	$("span.intro").eq(0).each(function(){
		var rx = Math.random()*$(this).parent().width(),
			ry = Math.random()*$(this).parent().height()/2;

		$(this).css({
			//"top":ry + "px",
			"left":rx + "px",
			"-moz-transform":"rotateX("+Math.random()*70+"deg) rotateY("+Math.random()*70+"deg)",
			"-webkit-transform":"rotateX("+Math.random()*70+"deg) rotateY("+Math.random()*70+"deg)",
			"transform":"rotateX("+Math.random()*70+"deg) rotateY("+Math.random()*70+"deg)"
		});
	});

	$("video").addClass("med")


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	$("span.med,span.sm").each(function(){
		var rx = Math.random()*$(window).width()/2,
			ry = Math.random()*$(window).height()/2;


		$(this).css({
			//"top":ry + "px",
			//"left":rx + "px",
			"transform":"rotateX("+Math.random()*60+"deg) rotateY("+Math.random()*60+"deg)"
		});
	});
	$("p").not(".credits p").each(function(){

			var rx = Math.random()*$(window).width()/1,
			ry = Math.random()*$(window).height()/2;
			$(this).css({
			//"top":ry + "px",
			//"left":rx + "px",
			"-moz-transform":"rotateX("+Math.random()*10+"deg) rotateY("+Math.random()*10+"deg)",
			"transform":"rotateX("+Math.random()*10+"deg) rotateY("+Math.random()*10+"deg)"
		});
	});
}else{

	$("span.med,span.sm").each(function(){
		var rx = Math.random()*$(window).width()/2,
			ry = Math.random()*$(window).height()/2;


		$(this).css({
			//"top":ry + "px",
			"left":rx + "px",
			"transform":"rotateX("+Math.random()*60+"deg) rotateY("+Math.random()*60+"deg)"
		});
	});

	$("p").not(".credits p").each(function(){

			var rx = Math.random()*$(window).width()/1,
			ry = Math.random()*$(window).height()/2;
			$(this).css({
			//"top":ry + "px",
			"left":rx + "px",
			"transform":"rotateX("+Math.random()*10+"deg) rotateY("+Math.random()*10+"deg)"
		});
	});

}




	$(".credits").each(function(){

	var rx = Math.random()*$(window).width()/2,
			ry = Math.random()*$(window).height()/2;
			$(this).css({
			//"top":ry + "px",
			"left":0 + "px",
			"transform":"rotateX("+Math.random()*0+"deg) rotateY("+Math.random()*0+"deg)"
		});
	});


	var timeout = null;

	$("span[data-cycle=2]").on('mousemove', function() {
	    if (timeout !== null) {
	        $(this).children("img").eq(1).addClass("a");
	        clearTimeout(timeout);
	    }

	    timeout = setTimeout(function() {
	        $("img").removeClass("a");
	    }, 700);
	});



	$("span").mouseover(function(){

		$(".caption").html($(this).attr("data-caption"));

	});

	$("span").on("click",function(){
		$(this).css("transform","rotateX(0) rotateY(0)").css("left","0")
		$("span").removeClass("a")
		$(this).addClass("a");
	});


});
