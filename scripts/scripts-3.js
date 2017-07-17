var IH = window.innerHeight,
    IW = window.innerWidth;

$(".container__black").css({"height": IH, "width": IW/2});
$(".container__white").css({"height": IH, "width": IW/2});

$(document).ready(function(){
    $('#drag').on('mousedown', function(e){
        var $dragable = $(this).parent(),
            startWidth = $dragable.width(),
            pX = e.pageX;

        $(document).on('mouseup', function(e){
            $(document).off('mouseup').off('mousemove');
        });
        $(document).on('mousemove', function(me){
            var mx = (me.pageX - pX);
            //var my = (me.pageY - pY);

            $dragable.css({
                left: mx / 2,
                width: startWidth - mx,
                //top: my
            });
        });

    });
});
