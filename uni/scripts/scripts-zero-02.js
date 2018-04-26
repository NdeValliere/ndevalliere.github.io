//
// function fadeIn(){
//   $(".folder__img").css({"opacity": 1});
//   $(".stroke__img").css({"opacity": 1});
// };
//
// $(document).ready(
//   setTimeout(function () {
//     fadeIn()
//   }, 5000);
// );


// setTimeout(position, 1500);


//Window resize content
//-
$(document).ready(loadContent);
$(window).resize(loadContent);

function loadContent() {
   setTimeout(rows, 1000);
   setTimeout(position, 3000);
}

function position(){
      var imgs = $(".folder");
      var grids = $(".folder");
      setTimeout(function(){
      imgs.animate({opacity: "1"},
                   {duration: 500});
      },100);
}

function rows(){
$(".grid__row").each(function(i){
   var gridRow = $(this);
   setTimeout(function(){
   gridRow.animate({opacity: "0", margin: 100/12/20 + "% auto"},
                   {duration: 30, queue: false})
                   // extra animation with delay
                   .delay(60).animate({opacity: 1}, {duration: 30});
   },i*30);
});
}
