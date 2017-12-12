function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var resize = (function () {
		var IH = window.innerHeight,
				IW = window.innerWidth;

    $(".container__grid").css({"width": IW + "px"});
		$(".grid__row").css({"width": IW + "px"});
    $(".grid__rect").css({"height": IH + "px"});
    $("img").css({"height": IH + "px"});
});

$(document).ready(resize);
$(window).resize(resize);
resize();

function stretch() {
    var pos = 0;
    var id = setInterval(frame, 30);
    var step = 200;
    var stepWidth = 1;
    var stepExpand = 1440;
    function frame() {
        if (pos == step*8) {
            $(".grid__rect--8").css({"width": stepWidth + "px"});
            pos = 0;
            // console.log(pos);
        }
        else if (pos == 0){
            pos++;
            $(".grid__rect--1").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step){
            pos++;
            $(".grid__rect--2").css({"width": stepExpand + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step*2){
            pos++;
            $(".grid__rect--3").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step*3){
            pos++;
            $(".grid__rect--4").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step*4){
            pos++;
            $(".grid__rect--5").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step*5){
            pos++;
            $(".grid__rect--6").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step*6){
            pos++;
            $(".grid__rect--7").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
            $(".grid__rect--8").css({"width": stepWidth + "px"});
        }
        else if (pos == step*7){
            pos++;
            $(".grid__rect--8").css({"width": stepExpand + "px"});
            $(".grid__rect--2").css({"width": stepWidth + "px"});
            $(".grid__rect--3").css({"width": stepWidth + "px"});
            $(".grid__rect--4").css({"width": stepWidth + "px"});
            $(".grid__rect--5").css({"width": stepWidth + "px"});
            $(".grid__rect--6").css({"width": stepWidth + "px"});
            $(".grid__rect--7").css({"width": stepWidth + "px"});
            $(".grid__rect--1").css({"width": stepWidth + "px"});
        }
        else {
            pos++;
        }
    }
}
stretch();
