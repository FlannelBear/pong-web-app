$(document).ready( setUp );

let ball = {
    xPosition: 50,  // will need to convert to string before manipulating css
    yPosition: 50
};

let leftPaddle = {
    xPosition: 5, 
    yPosition: 50
};

let rightPaddle = {
    xPosition: 95,
    yPosition: 50
};

function setUp() {
    // left paddle movement handler
    $(document).on('keyup', function(e){
        switch(e.keyCode){
            case 87:
                leftPaddleUp();
                break;
            case 83:
                leftPaddleDown();
                break;
            default:
                break;      
        }
    });
    // right paddle movement handler
    $(document).on('keyup', function(e){
        switch(e.keyCode){
            case 79:
                rightPaddleUp();
                break;
            case 76:
                rightPaddleDown();
                break;
            default:
                break;
        }
    });
    // start Game
    $('#startButton').on('click', startGame);
} // end documentReady

let Cv = 10;

function leftPaddleUp() {
    leftPaddle.yPosition -= 5;
    $('#leftPaddle').css('top', `${leftPaddle.yPosition}vh`);
}

function leftPaddleDown() {
    leftPaddle.yPosition += 5;
    $('#leftPaddle').css('top', `${leftPaddle.yPosition}vh`);
}

function rightPaddleUp() {
    rightPaddle.yPosition -= 5;
    $('#rightPaddle').css('top', `${rightPaddle.yPosition}vh`);
}

function rightPaddleDown() {
    rightPaddle.yPosition += 5;
    $('#rightPaddle').css('top', `${rightPaddle.yPosition}vh`);
}

function startGame(){
    // random point
    let x1 = randomX();
    let y1 = randomY();
    // third point
    let x2 = x1;
    let y2 = 50;
    // calculate legs
    let A = Math.abs(x2 - 50);
    let B = Math.abs(y1 - 50);
    // calculate thetaInit
    let thetaInit = Math.tan(B/A);
    // calculate velocity components
    let Av = Cv * Math.acos(thetaInit);
    let Bv = Cv * Math.asin(thetaInit);
}

function randomX(){
   let x = Math.floor(Math.random() * 100);
   return x;
}

function randomY(){
    let y = Math.floor(Math.random() * 100);
    return y;
}