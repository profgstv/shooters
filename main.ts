let enemyX: number = 0;
let myX: number = 0;
let ballY: number = 0;
let enemyBallY: number = 2;
let vel: number = 1;
let limit: number = 700;
let gameOver: boolean = false;

radio.setGroup(90);

basic.forever(function () {
    if(gameOver) {
        basic.showIcon(IconNames.No)
    } else {
        myX = Math.map(input.acceleration(Dimension.X), -1 * limit, limit, 0, 4);
        radio.sendValue("X", myX);
        radio.sendValue("Y", ballY);
        ballY += vel;
        // if(ballY >= 4 && myX == enemyX) {
        //     gameOver = true;
        //     return;
        // }
        if(ballY == 5 || ballY == -1) {
            vel *= -1;
        }

        basic.clearScreen();
        led.plot(myX, 4);
        led.plot(enemyX, 0);
        led.plot(enemyX, ballY);
    }
})

radio.onReceivedValue(function(name: string, value: number) {
    if(name == "X") {
        enemyX = value;
    } else if(name == "Y") {
        enemyBallY = Math.map(value, 0, 4, 4, 0)
    }
})