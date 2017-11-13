var resize = (function () {
	$('.container__grid').css({
			'width': window.innerWidth
	});
	$('.grid__divider').css({
			'max-width': window.innerWidth - (0.083*window.innerWidth)
	})
	$('.page__banner').css({
			'max-width': window.innerWidth
	})
	$('.container__video').css({
			'height': 0.86*window.innerHeight
	})
	$('.container__space').css({
			'height': window.innerHeight
	})

	if (window.innerWidth > 1500) {
		$('.grid__row').css({
				'padding': '4.15% 8.3%'
		});
		$('.page__banner').css({
				'max-width': (0.64*window.innerWidth)
		})
		$('.grid__divider').css({
				'max-width': (0.64*window.innerWidth)
		})
	}

	if (window.innerWidth > 2000) {
		$('.grid__row').css({
				'padding': '4.15% 22.15%'
		});
	}
});

$(document).ready(resize);
$(window).resize(resize);

var canvas = document.getElementById("canvas__wave");
var canvasHeight = 150;
canvas.width = window.innerWidth;
canvas.height = canvasHeight;

// The amount of segment points we want to create:
var amount = 3;

// The maximum height of the wave:
var height = 20;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: [0,0,0],
	strokeWidth: 150,
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
