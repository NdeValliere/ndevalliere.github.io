function stretch() {
    var pos = 0;
    var id = setInterval(frame, 10);
    var step = 30;
    var stepShrink = -10;
    var stepExpand = 200;
    function frame() {
      pos++;
        if (pos == step*8) {
          pos = 0;
          for(var i = 0; i <= 11; i++) {
            $(".grid__row--" + i + " .grid__rect--1").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--2").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--3").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--4").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--5").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--6").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--7").css({"margin-left": 0 + "px"});
            $(".grid__row--" + i + " .grid__rect--8").css({"margin-left": 0 + "px"});
          }
        }
        else if (pos == 0) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--1").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--8").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--2").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--1").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step*2) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--3").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--2").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step*3) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--4").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--3").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step*4) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--5").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--4").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step*5) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--6").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--5").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step*6) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--7").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--6").css({"margin-left": stepShrink + "px"});
          }
        }
        else if (pos == step*7) {
          for(var i = 0; i <=11; i++) {
            $(".grid__row--" + i + " .grid__rect--8").css({"margin-left": stepExpand*i + "px"});
            $(".grid__row--" + i + " .grid__rect--7").css({"margin-left": stepShrink + "px"});
          }
        }
    }
}
stretch();
