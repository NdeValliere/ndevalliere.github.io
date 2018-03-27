$("#ia").click(function () {
	location.href = "ia-01.html";
});
$("#ia").onmouseover(){
	
}

$("#stackmap").click(function () {
    $().animate({
				height: window.innerHeight*2
    }, 2000, function() {
      //thing to do when you animation is finished e.g.
      location.href = "stackmap-01.html";
    });
});

$("#home").click(function () {
	location.href = "index-01.html";
});
