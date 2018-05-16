// constellations
var points1 = '584.32 135.18 441.47 303.9 502.19 483.57 634.09 509.95',
    points2 = '145.43 490.2 54.49 547 96.08 638.26 206.6 666.76 293.49 666.76 385.24 468.5 488.12 349.1 559.01 308.78 617.4 288.63 729.31 185.75 696.64 371.34 617.4 288.63 740.44 270.55',
    points3 = '584.32 135.18 441.47 303.9 502.19 483.57 634.09 509.95 516.49 746.36 463.35 652.4 502.19 483.57 177.6 121.07 87.46 154 192.5 338.79 285.81 356.28 441.47 303.9',
    points4 = '757.05 180.25 707.56 257.37 655.72 338.16 521.5 548.71 466.23 598.71 356.35 526.34 241.87 463.17 70.14 262.61 147.92 287.96 264.85 305.95 373.46 314.47 707.56 257.37',
    points5 = '733.37 435.1 506.27 328.6 344.45 224.99 272.84 242.45 230.13 206.57 184.34 219.22 114.63 365.12 152.9 476.51 112.24 528.45 71.92 625.83',
    points6 = '342.24 70.33 286.14 106.71 324.7 150.1 316.81 197.87 234.86 256.6 182.27 333.3 105.57 426.65 197.17 390.71 321.64 378.88 369.85 388.95 505.71 400 586.79 418.76 576.71 477.49 619.85 492.82 663.05 461.27 628.86 419.19 731.42 464.34 663.05 461.27',
    points7 = '145.31 174.86 593.33 357.05 742.51 486.79 761.95 563.65 49.47 454.24 571.8 348.09',
    points8 = '117.75 188.96 626.77 498.12 697.55 552.25 754.8 632.4 652.79 632.4 577.84 626.16 45.92 468.98',
    points9 = '762.37 382.55 677.78 411.05 498.19 357.67 112.33 196.63 58.5 340.93 249.85 507.4 386.01 517.35 593.64 613.71',
    points10 = '755.09 592.5 573.26 574.31 442.53 502.07 442.73 494.72 446.96 334.98 565.12 88.08 182.56 296.15 61.66 617.56 442.53 502.07',
    points11 = '750.08 235.47 718.98 177.15 593.28 256.85 575.05 366.79 572.55 381.9 641.23 470.02 640.58 623.58 266.73 514.72 69.11 517.96 267.38 351.11 572.55 381.9',
    points12 = '72.71 80.39 238.59 322.72 304.95 455.91 289.56 733.82 699.21 625.15 304.95 455.91';

function constellation (points){

  var frame = '0 0 800 800';
  // Split the points into numbered pairs
  points = points.split(' ').map(x => Number(x));
  points = _.chunk(points, 2);

  // Split the frame into values
  var [a, b, w, h] = frame.split(' ').map(x => Number(x));

  // For each point, create a box, and set its position
  for(var i = 0; i < points.length; i++) {
    var [x, y] = points[i];


    x = (x / w) * 100;
    y = (y / h) * 100;

    var box = $('<div class="box"></div>');
    box.css({
      left: `${x}%`,
      top: `${y}%`,
      width: Math.random() * 100 + '%',
      height: Math.random() * 100 + '%'
    });

    $('body').append(box);
  }
}

//Timer based functions to randomise within set number of points (var) and then move on to the next constellation
//-
// var i = 0,
//   points;
//
// var timer = setInterval(function() {
//   var randomiseConstellation = setInterval(constellation(points1), 1000);
//   console.log(++i);
//
//   if (i === 1) {
//     points = points1;
//   }
//   if (i === 2) {
//     points = points2;
//   }
//   if (i === 3) {
//     points = points3;
//   }
//   if (i === 4) {
//     points = points4;
//   }
//   if (i === 5) {
//     points = points5;
//   }
//   if (i === 6) {
//     points = points6;
//   }
//   if (i === 7) {
//     points = points7;
//   }
//   if (i === 8) {
//     points = points8;
//   }
//   if (i === 9) {
//     points = points9;
//   }
//   if (i === 10) {
//     points = points10;
//   }
//   if (i === 11) {
//     points = points11;
//   }
//   if (i === 12) {
//     points = points12;
//   }
//
//   if (i === 13) clearInterval(timer);
//   console.log('cycled through all 12 constellations'); //this will still run after clearing
// }, 1000);


var i = 0;
var timer = setInterval(function() {
  // console.log(points1);
  console.log(++i);
  var randomiseConstellation = setInterval(constellation(points1), 500);

  if (i === 13) clearInterval(timer);
  console.log('cycled through one randomisation of this constellation'); //this will still run after clearing
}, 1000);

$(window).click(function () {
	location.href = "ines-01.html";
});
