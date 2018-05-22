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
    
} // end documentReady

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

