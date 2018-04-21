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

  var count = 0;
  var secs = 10 * 120;

  info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
  info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
  info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
  document.getElementById(targetId).innerHTML = info;

  //Get values
  //-
  var valueX = acceleration.x, // over ±9.81: left or right
      valueY = acceleration.y, // over -9.81: up
      valueZ = acceleration.z; // over -9.81: flat

  if (valueX > 5) {
    $("#test").text("Phone is lying on its RIGHT side: " + count);
    $(".container__img").css({"background": "url(../assets/work/img-" + count + ".png)"});
    setInterval(function() {
      if( count < 55) {
        count += 1;
      }
      else {
        count = 0;
      }
    }, secs);
  }
  if (valueX < -5) {
    $("#test").text("Phone is lying on its LEFT side: " + count);
    $(".container__img").css({"background": "url(../assets/work/img-" + count + ".png)"});
    setInterval(function() {
      if( count < 55) {
        count += 1;
      }
      else {
        count = 0;
      }
    }, secs);
  }
  if (valueY < -5) {
    $("#test").text("Phone is standing UP: " + count);
    setInterval(function() {
      if( count < 55) {
        count += 1;
      }
      else {
        count = 0;
      }
    }, secs);
  }
  if (valueY > 5) {
    $("#test").text("Phone is pointing DOWN: " + count);
    $(".container__img").css({"background": "url(../assets/work/img-" + count + ".png)"});
    setInterval(function() {
      if( count < 55) {
        count += 1;
      }
      else {
        count = 0;
      }
    }, secs);
  }
  if (valueZ < -5) {
    $("#test").text("Phone is FLAT: " + count);
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
		$(".container__grid").css({"width": IW,
                               "height": IH });
    $(".container__img").css({"width": 0.8*IW,
                              "height": 0.8*IH,
                              "top": 0.1*IH,
                              "left": 0.1*IW,
                              // "background": "url(../assets/work/img-1.png)",
                              // "background-size": "350px 100%"
                             });
}
