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
   setTimeout(position, 1500);
}

function position(){
      var imgs = $(".folder");
      setTimeout(function(){
      imgs.animate({opacity: "1"},
                   {duration: 500});
      },100);
}
