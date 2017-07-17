var IH = window.innerHeight,
    IW = window.innerWidth;

$(".container__black").css({"height": IH, "width": IW/2});
$(".container__white").css({"height": IH, "width": IW/2});

$('.container__vid').on('mouseenter',function(e){
    var maxX = $(window).width() - $(this).width();
    var maxY = $(window).height() - $(this).height();
    $(this).css({
        'left':getRandomInt(0, maxX),
        'top':getRandomInt(0, maxY)
    });
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
