function fade(){
$("p").each(function(i){
   var para = $(this);
   setTimeout(function(){
   para.animate({opacity: "1"},
                   {duration: 1000, queue: false})
                   // extra animation with delay
                   .delay(1000).animate({opacity: "0", marginTop: "-11.5vw"}, {duration: 100});
   },i*1000);
});
}

$(document).ready(loadContent);

function loadContent() {
  setTimeout(fade, 500);
}
