let boxes = document.querySelectorAll('.box');
let flag = 1 ;//  1 for X , 0 for O
clearBoard();

currentplayer = document.querySelector('.currentplayerSign');
currentplayer.innerText ='X';
// currentplayer.style.color = 'red'

function clearBoard(){
    flag = 1;
    boxes.forEach( (box) => box.innerText = '' );
}

let btn = document.querySelector('.restartBTN');
btn.addEventListener('click', clearBoard);

let xscore = document.querySelector('.xscore');
let oscore = document.querySelector('.oscore');

xscore.innerText = 0;
oscore.innerText = 0;

let xscoreINT=0;
let oscoreINT=0;

boxes.forEach( (box) => {
    box.addEventListener('click', (ev) =>{
        if(box.innerText == ''){
             if (flag == 1) {box.innerText = 'X'; flag = 0;}
            else {box.innerText = 'O'; flag =1}
            checkForWin();
        }
    })
})

function checkForWin(){
    if (boxes[0].innerText===boxes[1].innerText && boxes[1].innerText===boxes[2].innerText && boxes[0].innerText!==''){
        updateScore(boxes[0].innerText);
        clearBoard();
    }
    if (boxes[3].innerText===boxes[4].innerText && boxes[4].innerText===boxes[5].innerText && boxes[3].innerText!==''){
        updateScore(boxes[3].innerText);
        clearBoard();
    }
    if (boxes[6].innerText===boxes[7].innerText && boxes[7].innerText===boxes[8].innerText && boxes[6].innerText!==''){
        updateScore(boxes[6].innerText);
        clearBoard();
    }
    if (boxes[0].innerText===boxes[3].innerText && boxes[3].innerText===boxes[6].innerText && boxes[0].innerText!==''){
        updateScore(boxes[0].innerText);
        clearBoard();
    }
    if (boxes[1].innerText===boxes[4].innerText && boxes[4].innerText===boxes[7].innerText && boxes[1].innerText!==''){
        updateScore(boxes[1].innerText);
        clearBoard();
    }
    if (boxes[2].innerText===boxes[5].innerText && boxes[5].innerText===boxes[8].innerText && boxes[2].innerText!==''){
        updateScore(boxes[2].innerText);
        clearBoard();
    }
    if (boxes[0].innerText===boxes[4].innerText && boxes[4].innerText===boxes[8].innerText && boxes[0].innerText!==''){
        updateScore(boxes[0].innerText);
        clearBoard();
    }
    if (boxes[2].innerText===boxes[4].innerText && boxes[4].innerText===boxes[6].innerText && boxes[2].innerText!==''){
        updateScore(boxes[2].innerText);
        clearBoard();
    }     
    updateCurrentplayer();
}

function updateScore(sign){
    if(sign == 'X'){
        xscoreINT++;
        xscore.innerText = xscoreINT;
    } 
    else {
        oscoreINT++;
        oscore.innerText = oscoreINT;
    }
}
function updateCurrentplayer(){
    if (flag == 1 ) {
        currentplayer.innerText = 'X';
        currentplayer.style.color = 'red'
    }

    else { currentplayer.innerText = 'O';
        currentplayer.style.color = 'blue'
    }
}