var left = ["#ffebee","#ef9a9a","red","white","white","white","white","white","white","white"];
var right = ["white","white","white","white","white","white","white","red","#ef9a9a","#ffebee"];




function leftSide() {
    var countL = -1;

    function setColorsL() {
        for (var i = 2; i<9 ; i++) {
            $($('div div')[i-2]).css('background', left[i]);
        }
    }
    move();
    function move() {
        if (++countL <= 9) {
            setColorsL();
            var last = left.pop();
            left.unshift(last);
            setTimeout(move,100);

        }
        if (countL == left.length){
            rightSide();
        }
    }
}

function rightSide() {
    var countR = -1;

    function setColoursR() {
        for (var j = 0; j<8 ;j++) {
            $($('div div')[j]).css('background', right[j+1]);
        }
    }

    move();
    function move(){
        if (++countR <= 9){
            setColoursR();
            var fvalue = right.shift();
            right.push(fvalue);
            setTimeout(move,100);
        }
        if (countR == right.length){
            countR = -1;
            countL = -1;
            leftSide();
        }
    }
}

leftSide();

