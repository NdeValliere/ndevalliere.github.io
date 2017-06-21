$(document).ready(function(){
		var selection = document.getElementsByTagName('span');

    var timesRun = 0;
    var interval = setInterval(execute, 5000);

    function execute(){
        timesRun += 1;

				console.log('running');
    		var randomSpan = selection[Math.floor(Math.random() * selection.length)];
				randomSpan.setAttribute('class','large');

        if(timesRun === 5){
            clearInterval(interval);
        }
     }
});


$('span, .page__title').on('mouseenter',function(){
    $(this).css({
        'background-image': 'url("../assets/gifs/' + getRandomInt(1, 39) + '.gif")'
    });
});

$('span, .page__title').on('mouseleave',function(){
    $(this).css({
        'background-image': 'none'
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
