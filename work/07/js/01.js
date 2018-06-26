// var colour = ['#d6ffeb', '#ffe8d6', '#d7e9ff', '#ffe2e2'],
var colour = ['#ececec', '#b9b9b9', '#c6c6c4', '#d7d7d6'],
         a = $('a');

$(window).on('load', function() {
  var count = 0;
  $('a').append('<span class="background background--blur"></span>');

    $('a').each(function(){
      var i = getRandomInt(0,3),
          widthA = $(this).innerWidth();

      count ++;

      $(this).append('<small id="small--' + count + '">' + count + '</small>');

      $(this).find('small').css({'color': colour[i] });
      $(this).find('.background').css({'width': widthA,
                                       'margin-left': -widthA + i*3,
                                       'background': colour[i],
                                       'margin-top': i * 3
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
  $(this).css({'color': 'white'});
  setTimeout(function () {
    $(this).find('.background').removeClass('transition');
  }, 1000);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
