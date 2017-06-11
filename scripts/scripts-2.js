var IH = window.innerHeight,
    IW = window.innerWidth;

$(".container__black").css({"height": IH, "width": IW/2});
$(".container__white").css({"height": IH, "width": IW/2});

(function() {
  var target = $("#target");
  $("#source").scroll(function() {
    target.prop("scrollTop", this.scrollTop)
          .prop("scrollLeft", this.scrollLeft);
  });
})();

// console.log("doing something");
