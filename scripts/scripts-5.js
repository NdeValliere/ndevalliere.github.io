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


$('span').on('mouseenter',function(){
    $(this).css({
        'background-image': 'url("../assets/gifs/' + getRandomInt(0, 39) + '.gif")'
    });
});

$('span').on('mouseleave',function(){
    $(this).css({
        'left':getRandomInt(0, 10),
        'background-image': 'none'
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
