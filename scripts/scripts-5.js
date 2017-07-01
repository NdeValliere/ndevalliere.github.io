$(document).ready(function(){
		var selection = document.getElementsByTagName('span');

    var timesRun = 0;
    var interval = setInterval(execute, 500);

    function execute(){
        timesRun += 1;

    		var randomSpan = selection[Math.floor(Math.random() * selection.length)];

				randomSpan.setAttribute('class','large');

        if(timesRun === 200){
            clearInterval(interval);
        }

        $('.container__project-titles').css({
            'left': timesRun + '%'
        });

        if(timesRun > 20) {
          $('.container__project-titles').css({
              'left': '-15%'
          });
        }
     }
});

var preview = document.createElement('div');
preview.className = 'container__preview';

$('span, .page__title').on('mouseenter',function(){
	this.appendChild(preview);

    $(this).css({
        // 'background-image': 'url("../assets/gifs/rainbow.gif")',
				'font-family': 'PT Mono',
				'font-weight': '900'
        // 'color': 'rgba('+ getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ','  + '0)'
    });

		$('.a .container__preview').css({
        'background-image': 'url("../assets/gifs/a-' + getRandomInt(1,4) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });

		$('.b .container__preview').css({
        'background-image': 'url("../assets/gifs/b-' + getRandomInt(1,4) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });

		$('.c .container__preview').css({
        'background-image': 'url("../assets/gifs/c-' + getRandomInt(1,3) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });

		$('.d .container__preview').css({
        'background-image': 'url("../assets/gifs/d-' + getRandomInt(1,2) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });

		$('.e .container__preview').css({
        'background-image': 'url("../assets/gifs/e-' + getRandomInt(1,7) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });

		$('.f .container__preview').css({
        'background-image': 'url("../assets/gifs/f-' + getRandomInt(1,3) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });

		$('.g .container__preview').css({
        'background-image': 'url("../assets/gifs/g-' + getRandomInt(1,5) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });
});

$('span, .page__title').on('mouseleave',function(){
    $(this).css({
        // 'background-image': 'none'
				'font-family': 'PT Mono X',
				'font-weight': '400'
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
