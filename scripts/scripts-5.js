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
        // 'background-image': 'url("../assets/gifs/' + getRandomInt(1, 32) + '.gif")',
				'background': 'black',
        'color': 'rgba('+ getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ','  + '0)'
    });
		$('.container__preview').css({
        'background-image': 'url("../assets/gifs/A-' + getRandomInt(1,11) + '.gif',
				'animation': 'rotatePreview-' + getRandomInt(1,5) + ' ' + getRandomInt(1,10) + 's ease 0s infinite alternate'
    });
});

$('span, .page__title').on('mouseleave',function(){
    $(this).css({
        'background': 'transparent',
        'color': 'black'
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
