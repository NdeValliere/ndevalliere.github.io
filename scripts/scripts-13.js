var typed = new Typed('#intro__text--1', {
  strings: ["Hi there! Lovely to meet you!", "My name is Nathalie de Vallière.", "This is my portfolio of work.", ""],
  typeSpeed: 40
});

var canvas = document.getElementById("canvas__wave");
// var container = document.getElementByClass("container__work");
canvas.width = window.innerWidth;
// container.width = window.innerWidth;

// The amount of segment points we want to create:
var amount = 3;

// The maximum height of the wave:
var height = 30;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: [0],
	strokeWidth: 110,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
	path.add(new Point(i / amount, 1) * view.size);
}

// Select the path, so we can see how it is constructed:
path.selected = false;

function onFrame(event) {
	// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];

		// A cylic value between -1 and 1
		var sinus = Math.sin(event.time * 0.75 + i);

		// Change the y position of the segment point:
		segment.point.y = sinus * height + 100;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
	path.smooth();
}
