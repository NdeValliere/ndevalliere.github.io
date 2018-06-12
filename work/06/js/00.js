var o =  $("span");

$(window).on("load", function() {
  appendCircles();
});

$(window).on("mousemove", function(event) {
  var mX = event.pageX,
      mY = event.pageY,
      w = $(window).width(),
      h = $(window).height(),
      c =  $(".inside");

      //1.25vh max
      // console.log("x " + (mX/w*1.25) + " y " + (mY/h*1.25));
      c.css({"left": (-1 + (mX/w*2)) + "vh",
              "top": (-1 + (mY/h*2)) + "vh"});

});

function appendCircles() {
  $("span").append("<span class='inside'></span>");
}
