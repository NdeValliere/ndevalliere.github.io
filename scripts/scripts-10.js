$("#cognateBlack").click(function() {
    $("#animateBlack").attr("begin", 0);
    $(".link__page").css({"cursor": "pointer"});
    $(".link__page--logo").css({"cursor": "url('../assets/png/gasp.png'), pointer"});
});

$(".link__page--nav").mouseover(function() {
    $(this).css({"transform": "rotateY(180deg)"});
});

$(".link__page--nav").mouseout(function() {
    $(this).css({"transform": "rotateY(0deg)"});
});
