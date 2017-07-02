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


$('span, .page__title').on('mouseenter',function(){
    $(this).css({
        'background-image': 'url("../assets/emojis/' + getRandomInt(1, 32) + '.gif")',
        'color': 'rgba('+ getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ','  + '0)'
				// 'display': 'initial',
				// 'height': 'auto',
				// 'position': 'static'
    });
});

$('span, .page__title').on('mouseleave',function(){
    $(this).css({
        'background-image': 'none',
        'color': 'black'
				// 'display': 'block',
				// 'height': '500px',
				// 'position': 'absolute'
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
