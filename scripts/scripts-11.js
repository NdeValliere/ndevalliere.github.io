var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

		$("container__svg").css({"height": IH, "width": IW});

  });

$(document).ready(resize);
$(window).resize(resize);


$("path").mouseover(function() {
    $(this).css({"fill": "rgba(255,255,255,1)"});
});
