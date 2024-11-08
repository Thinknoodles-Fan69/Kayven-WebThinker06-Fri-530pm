// 
let canvas, context;
let centerX, centerY;
let ballX, ballY;
let dX, dY;

let drawBall = () => {
    context.linewidth = 10;
    context.strokeStyle = "rgb(255, 0, 0)";
    context.fillStyle = "rgb(0, 0, 255)";

    context.beginPath();
    context.arc(ballX, ballY, 10, 0, 2 * Math.PI)
    context.stroke();
    context.fill();
}


let animating = () => {
    
    if (document.getElementById("playAnimation").checked) {
        context.reset();


        if (ballX < 0 || ballX > canvas.width) {
            dX = -dX;
        }
        if (ballY < 0 || ballY > canvas.height) {
            dY = -dY;
        }
    
    
    
    
    
    
        ballX = ballX + dX;
        ballY = ballY + dY;
        drawBall();
    }
    

    requestAnimationFrame(animating);
}



window.onload = () => {
    canvas = document.getElementById("drawingBoard");
    context = canvas.getContext("2d");
    console.log("context");

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    ballX = centerX;
    ballY = centerY;

    dX = 5;
    dY = 5;

    drawBall();
    animating();


}
