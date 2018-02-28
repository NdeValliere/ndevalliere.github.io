//Accelerometer code: https://developers.google.com/web/fundamentals/native-hardware/device-orientation/
//START
//-
if ("Accelerometer" in window && "Gyroscope" in window) {
  document.getElementById("moApi").innerHTML = "Generic Sensor API";

  let accelerometerWithGravity = new Accelerometer({ includeGravity: true });
  accelerometerWithGravity.addEventListener("reading", e =>
                                            accelerationHandler(accelerometerWithGravity, "moAccelGrav")
                                           );
  accelerometerWithGravity.start();

  intervalHandler("Not available in Generic Sensor API");
} else if ("DeviceMotionEvent" in window) {
  // document.getElementById("alert").style.display = "none";
  document.getElementById("moApi").innerHTML = "Device Motion API";

  window.addEventListener(
    "devicemotion",
    function(eventData) {
      accelerationHandler(
        eventData.accelerationIncludingGravity,
        "moAccelGrav"
      );
    },
    false
  );
} else {
  // document.getElementById("alert").style.display = "none";
  document.getElementById("moApi").innerHTML =
    "No Accelerometer & Gyroscope API available";
}

function accelerationHandler(acceleration, targetId) {
  var info,
      xyz = "<p class='value' id='value__x'> X :X</p> <p class='value' id='value__y'> Y :Y</p>, <p class='value' id='value__z'> Z :Z</p>";

  info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
  info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
  info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
  document.getElementById(targetId).innerHTML = info;
}
//-
//END

//Get window width and height and adjust grid accordingly
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
		$(".container__grid").css({"width": 1.5*IW,
                               "left": -0.25*IW,
                               "top": -0.5*IW});
    // $(".grid__col--12").css({"width": 2*IW });
}
