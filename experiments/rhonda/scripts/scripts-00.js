//show timestamp upper right-hand corner
$(document).ready(function() {
   setInterval(function() {
     var timeStamp = new Date();
     $(".text--date span").html(timeStamp);
   }, 1000);

   setTimeout(function () {
     buttonCamera();
   }, 1000);
});

function buttonCamera() {
  $(".button__cameraSwitch").css({"width": $(".text--date span").innerWidth()});
}
