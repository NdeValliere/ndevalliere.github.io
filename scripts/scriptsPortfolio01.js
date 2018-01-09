var gridRow = $('.grid__row');
// console.log(gridRow.width());

var resize = (function () {
	$('#canvas__wave').css({
			'width': window.innerWidth+0.1,
			'height': 150
	});

	$('.container__grid').css({
			'width': window.innerWidth
	});

	$('.grid__divider').css({
			'max-width': window.innerWidth - (0.083*window.innerWidth)
	})
	$('.page__banner').css({
			'width': '100%',
			'max-width': window.innerWidth
	})
	// $('.container__video').css({
	// 		'height': (0.86*window.innerHeight)
	// })
	$('.container__space').css({
			'height': window.innerHeight
	})

	if (window.innerWidth > 1500) {
		$('.grid__row').css({
				'padding': '4.15% 8.3%'
		});
		$('.page__banner').css({
				'width': gridRow.width(),
				'max-width': gridRow.width()
		})
		$('.grid__divider').css({
				'max-width': gridRow.width()
		})
	}

	if (window.innerWidth > 2000) {
		$('.grid__row').css({
				'padding': '4.15% 22.15%'
		});
		$('.grid__row--narrowBottom').css({
				'padding-bottom': '0'
		});
	}

	if (window.innerWidth < 1300) {
		$('.page__banner--codepen').css({
				'max-width': 650
		});
		// $('a.page__link--iframe').css({
		// 		'max-width': window.innerWidth
		// });
		// $('a.page__link--iframe:before').css({
		// 		'max-width': window.innnerWidth
		// });
		// $('.container__video--small').css({
		// 		'height': (0.86*window.innerHeight);
		// });
	}
});

$(document).ready(resize);
$(window).resize(resize);
resize();

//Loading content placeholder
$(document).ready(function() {
	$('.container__video').css({
			'background': 'rgba(255,255,255,0)'
	});
	$('img').css({
			'background': 'rgba(255,255,255,0)'
	});
	$('.grid__col--12').css({
			'background': 'rgba(255,255,255,0)'
	});
});

//motherfucking hover states
$('.page__link--iframeHolder').mouseover(function () {
    $(this).css({
				'background': 'white',
				'cursor': 'pointer'
    });
		$(this).find('a').css({
				'color': 'black',
				'-webkit-text-stroke': '0.5px #000'
    });
});
$('.page__link--iframeHolder').mouseout(function () {
    $('.page__link--iframeHolder').css({
				'background':'black'
    });
		$('.page__link--iframeHolder a').css({
				'color': 'white',
				'-webkit-text-stroke': '0px #fff'
    });
});


//Navigational elements blocks
$('#stackmap').click(function () {
    $('.container__swipe').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'stackmap.html';
    });
});

$('#workco').click(function () {
    $('.container__swipe').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'workco.html';
    });
});

$('#ia').click(function () {
    $('.container__swipe').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'ia.html';
    });
});

$('.play__project--1').click(function () {
    $('.container__swipe').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'space.html';
    });
});

$('.play__project--2').click(function () {
    $('.container__swipe').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = '../3d/3js-1.html';
    });
});

$('.play__project--3').click(function () {
    $('.container__swipe').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'posters.html';
    });
});

$('#index').click(function () {
    $('.container__swipe--black').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'index--portfolio.html';
    });
});

$('#indexFooter').click(function () {
    $('.container__swipe--black').animate({
				height: window.innerHeight*2
    }, 2000,function() {
      //thing to do when you animation is finished e.g.
      location.href = 'index--portfolio.html';
    });
});
