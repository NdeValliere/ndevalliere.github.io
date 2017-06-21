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
