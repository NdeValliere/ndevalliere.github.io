var colour = ['#d6ffeb', '#ffe8d6', '#d7e9ff', '#ffe2e2'],
         a = $('a');

$(window).on('load', function() {
    $('a').append('<span class="background background--blur"></span>');

    $('a').each(function(){
      var i = getRandomInt(0,3),
          widthA = $(this).innerWidth();
      $(this).find('.background').css({'width': widthA,
                                       'margin-left': -widthA + i*5,
                                       'background': colour[i],
                                       'margin-top': i * 5
                                       // 'background': 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), '+ colour[i] + ', rgba(0,0,0,0), rgba(0,0,0,0))'
                                     });
    })
});

a.mouseover(function(){
  $(this).find('.background').addClass('blur transition');
});
a.mouseout(function(){
  $(this).find('.background').removeClass('blur');
  setTimeout(function () {
    $(this).find('.background').removeClass('transition');
  }, 1000);
});



$(window).on('mousemove', function(event) {
  var mX = event.pageX,
      mY = event.pageY,
      w = $(window).width(),
      h = $(window).height();
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
