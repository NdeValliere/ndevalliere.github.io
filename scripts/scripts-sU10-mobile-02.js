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
  document.getElementById("moApi").innerHTML =
    "No Accelerometer & Gyroscope API available";
}

function accelerationHandler(acceleration, targetId) {
  var info,
      xyz = "<p class='value' id='value__x'>X</p> <p class='value' id='value__y'>Y</p>, <p class='value' id='value__z'>Z</p>";

  info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
  info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
  info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
  document.getElementById(targetId).innerHTML = info;

  //Get values
  //-
  var valueX = acceleration.x; // over ±9.81: left or right
      valueY = acceleration.y; // over -9.81: up
      valueZ = acceleration.z; // over -9.81: flat

  if (valueX > 5) {
    $("#test").text("Phone is lying on its RIGHT side.");
    $(".container__grid").css({"margin-left": "+=667px"});
  }
  if (valueX < -5) {
    $("#test").text("Phone is lying on its LEFT side.");
    $(".container__grid").css({"margin-left": "-=667px"});
  }
  if (valueY < -5) {
    $("#test").text("Phone is standing UP.");
    $(".container__grid").css({"margin-top": "+=667px"});
    // $("img").css({"border": "10px solid black"});
  }
  if (valueY > 5) {
    $("#test").text("Phone is pointing DOWN.");
    $(".container__grid").css({"margin-top": "-=667px"});
    // $("img").css({"border": "10px solid pink"});
  }
  if (valueZ < -5) {
    $("#test").text("Phone is lying FLAT.");
  }
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
		$(".container__grid").css({"width": 6*IW + "px",
                               "height": 5*IH + "px"});
    $(".grid__row").css({"width": 6*IW + "px",
                           "height": 0.5*IH + "px"});
    $(".grid__col--1").css({"width": 0.5*IW + "px",
                            "height": 0.5*IH + "px"});
    $("img").css({"max-width": 0.45*IW + "px",
                  "max-height": 0.45*IH + "px"});
}