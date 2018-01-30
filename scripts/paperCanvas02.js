// The amount of segment points we want to create:
var amount = 3;

// The maximum height of the wave:
var height = 20;

// Change speed of waves
var speed = 0.1;
var flip = false;

// Create a new path and style it:
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
// Create a new path and style it
>>>>>>> 6be57805e9404c8f765b865a1b72080a77dbf56b
=======
=======
// Create a new path and style it
>>>>>>> 6be57805e9404c8f765b865a1b72080a77dbf56b
var path = new Path({
	// 80% black:
	strokeColor: [0,0,0],
	strokeWidth: 2,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
	path.add(new Point(i / amount, 1) * view.size);
}

// Select the path, so we can see how it is constructed:
path.selected = false;


// Animation events
function onFrame(event) {
	// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];

		// A cylic value between -1 and 1
		var sinus = Math.sin(event.time * speed + i);

		//Change values depending on scroll
		$(window).scroll(function() {
			if(speed < 0.2) {
				flip = true;
			}
			if (flip) {
				speed = speed + 0.00001;
			}
			if (speed > 1) {
				flip = false;
			}
			if (!flip) {
				speed = speed - 0.00001;
			}
		});

		console.log(speed);
		console.log(flip);

		// Change the y position of the segment point:
		segment.point.y = sinus * height + 100;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
	path.smooth();
}
