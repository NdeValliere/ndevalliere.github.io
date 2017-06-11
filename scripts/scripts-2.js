var IH = window.innerHeight,
    IW = window.innerWidth;

$(".container__black").css({"height": IH, "width": IW/2});
$(".container__white").css({"height": IH, "width": IW/2});


//existing text must be rendered in the first container so we know how high it is compared to the div
//get references to avoid overhead in jQuery
var cont1 = $('.container__black');
var cont1Height = cont1.height();

var p1 = $('#cont1 p');
var p1Height = p1.height();

var p2 = $('#cont2 p');

//get text and explode it as an array
var p1text = p1.text();
p1text = p1text.split('');

//prepare p2 text
p2text = [];

//if greater height
while (p1Height > cont1Height) {

    //remove last character
    lastChar = p1text.pop();

    //prepend to p2 text
    p2text.unshift(lastChar);

    //reassemble p1 text
    p1temp = p1text.join('');

    //place back to p1
    p1.text(p1temp);

    //re-evaluate height
    p1Height = p1.height();

    //loop
};

//if less than, assemble p2 text and render to p2 container
p2.text(p2text.join(''));​
