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
    $(document).on('keydown', function(e){
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
    $(document).on('keydown', function(e){
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
    // right paddle movement handlers
} // end documentReady

function leftPaddleUp() {
    console.log('leftPaddle up');
}

function leftPaddleDown() {
    console.log('leftPaddle down');
}

function rightPaddleUp() {
    console.log('rightPaddle up');  
}   

function rightPaddleDown() {
    console.log('rightPaddle down');
}