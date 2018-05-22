# Pong Web App

## To-do:

- [x]Create three objects on the DOM: paddle, ball, paddle
- Set Up/Down keys and W/S keys as control buttons for paddles
- Determine algorithm for movement of the ball
    - Dependant on angle of impact: Trigonometry
    - Ball movement handler will need to toggle based on time
- Set count down to start on click of start button
- Reset objects on DOM when the ball passes the paddles and impacts the walls
- Set dashed line for "half-court": object
- Create score count on dom which updates when the ball impacts the wall
- Set score limit to end game and require a refresh

## Instructions

Pong is a two player game.  The goal is to strike the opposite wall with the ball, preventing the ball from striking your wall using your paddle.  The left paddle is controlled using the "W" and "S" keys, and the right paddle is controlled by the "Up arrow" and "Down arrow" keys.  The game will end when someone scores 3 points.

### Technologies

- Javascript
- JQuery
- Bootstrap

#### Documentation 

- keydown: event listener for handling paddle movement
- Up arrow key code: 38
- Down arrow key code: 40
- W key code: 87
- S key code: 83

- Cv = const;
- ThetaInit = tan(b/a);
- Av = Cv * acos(Theta);
- Bv = Cv * asin(Theta);
- A = abs(X1 - 50vw);
- B = abs(Y1 = 50vh);
- ThetaN = 90 - ThetaN-1;