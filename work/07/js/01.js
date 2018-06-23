// var colour = ['#d6ffeb', '#ffe8d6', '#d7e9ff', '#ffe2e2'],
var colour = ['#d6ffeb', '#ffe8d6', '#d7e9ff', '#ffe2e2'],

// var colour = ['rgb(100,100,100)', 'rgb(150,150,150)', 'rgb(200,200,200)', 'rgb(50,50,50)'],

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
  $(this).css({'color': $(this).find('.background').css('background-color')});
});
a.mouseout(function(){
  $(this).find('.background').removeClass('blur');
  $(this).css({'color': 'black'});
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
