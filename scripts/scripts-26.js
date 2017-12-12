function stretch() {
    var pos = 0;
    var id = setInterval(frame, 10);
    var step = 30;
    var stepheight = 500;
    var stepExpand = 827;
    function frame() {
        if (pos == step*8) {
            $(".grid__rect--8").css({"height": stepheight + "px"});
            pos = 0;
            // console.log(pos);
        }
        else if (pos == 0){
            pos++;
            $(".grid__rect--1").css({"height": stepExpand + "px",
                                    "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": -1*stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step/2)){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--4").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step){
            pos++;
            $(".grid__rect--2").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--4").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step*2){
            pos++;
            $(".grid__rect--3").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step*2+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--4").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step*3){
            pos++;
            $(".grid__rect--4").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step*3+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step*4){
            pos++;
            $(".grid__rect--5").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step*4+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--4").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step*5){
            pos++;
            $(".grid__rect--6").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step*5+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step*6){
            pos++;
            $(".grid__rect--7").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--8").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step*6+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--8").css({"margin-top": 1*stepExpand + "px"});
        }
        else if (pos == step*7){
            pos++;
            $(".grid__rect--8").css({"height": stepExpand + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--1").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--3").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--4").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--5").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--6").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--7").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
            $(".grid__rect--2").css({"height": stepheight + "px",
                                     "margin-top": -1*stepExpand + "px"});
        }
        else if (pos == (step*7+(step/2))){
            pos++;
            $(".grid__rect--1").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--3").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--5").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--6").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--7").css({"margin-top": 1*stepExpand + "px"});
            $(".grid__rect--2").css({"margin-top": 1*stepExpand + "px"});
        }
        else {
            pos++;
        }
    }
}
stretch();

// $(".grid__rect--1").css({"height": stepExpand + "px"});
// for (var i = 2; i > 9; i++) {
//   $(".grid__rect--"+ i).css({"height": stepheight + "px"});
// }
