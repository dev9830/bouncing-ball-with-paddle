var ball,paddle;





ball_x = 100;
 ball_y = 100;

 directionX = 1.5;
 directionY = 1;

 speed = 3; 

 var score;
 Text = "score";

paddle_width = 150; 
 paddle_height = 30; 

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  resetGame("score");
}

function resetGame(){
  score = 0;
  
}

function draw() {
  background(220);
  ballBounce();

  paddle();
  text(score,10,10);
  if (score >=3) {
    resetGame("score")
  }
  text(Text, 10,30);
}



function paddle() {
  //bounce off paddle
  if (ball_y < paddle_height &&
    ball_x > mouseX - paddle_width / 2 &&
    ball_x < mouseX + paddle_width / 2) {
    directionY = -directionY
    score++;
  }

  //draw paddle
  rect(mouseX, paddle_height / 2, paddle_width, paddle_height);
}

function ballBounce() {

  ellipse(ball_x, ball_y, 20, 20);
  ball_x += directionX * speed ;
  ball_y += directionY * speed;

  //bounce off walls
  if (ball_x >= width || ball_x <= 0) {
    directionX = -directionX
  }
  if (ball_y >= height || ball_y <= 0) {
    directionY = -directionY
  }
}