const blessed = require('blessed');
console.log("## active_line 4 ##");
const screen = blessed.screen();
console.log("## active_line 5 ##");

console.log("## active_line 6 ##");
let pixel = (x, y) => ({ x: x, y: y });
console.log("## active_line 7 ##");

console.log("## active_line 8 ##");
let snake = [pixel(5,5)]; // initial position of the snake
console.log("## active_line 9 ##");
let direction = 'right'; 
console.log("## active_line 10 ##");
let apple = pixel(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
console.log("## active_line 11 ##");

console.log("## active_line 12 ##");
// Set key bindings
console.log("## active_line 13 ##");
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
console.log("## active_line 14 ##");
  return process.exit(0);
console.log("## active_line 15 ##");
});
console.log("## active_line 16 ##");

console.log("## active_line 17 ##");
screen.key(['up', 'down', 'left', 'right'], (ch, key) => {
console.log("## active_line 18 ##");
  direction = key.name;
console.log("## active_line 19 ##");
});
console.log("## active_line 20 ##");

console.log("## active_line 21 ##");
function eatApple() {
console.log("## active_line 22 ##");
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
console.log("## active_line 23 ##");
        snake[snake.length] = apple;
console.log("## active_line 24 ##");
        apple = pixel(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
console.log("## active_line 25 ##");
    }
console.log("## active_line 26 ##");
}
console.log("## active_line 27 ##");

console.log("## active_line 28 ##");
function moveSnake() {
console.log("## active_line 29 ##");
    // pop the tail and then put it on the front of the snake.
console.log("## active_line 30 ##");
    let tail = snake.pop();
console.log("## active_line 31 ##");
    if(direction === 'right') tail.x = snake[0].x + 1;
console.log("## active_line 32 ##");
    else if(direction === 'down') tail.y = snake[0].y + 1;
console.log("## active_line 33 ##");
    else if(direction === 'left') tail.x = snake[0].x - 1;
console.log("## active_line 34 ##");
    else if(direction === 'up') tail.y = snake[0].y - 1;
console.log("## active_line 35 ##");
    snake.unshift(tail);
console.log("## active_line 36 ##");
}
console.log("## active_line 37 ##");

console.log("## active_line 38 ##");
// Render function
console.log("## active_line 39 ##");
function draw() {
console.log("## active_line 40 ##");
  // Clear the screen
console.log("## active_line 41 ##");
  screen.clear();
console.log("## active_line 42 ##");

console.log("## active_line 43 ##");
  // Draw the snake
console.log("## active_line 44 ##");
  snake.forEach(pixel => {
console.log("## active_line 45 ##");
    blessed.box({
console.log("## active_line 46 ##");
        top: pixel.x,
console.log("## active_line 47 ##");
        left: pixel.y,
console.log("## active_line 48 ##");
        width: 1,
console.log("## active_line 49 ##");
        height: 1,
console.log("## active_line 50 ##");
        style: {
console.log("## active_line 51 ##");
          bg: 'white'
console.log("## active_line 52 ##");
        }
console.log("## active_line 53 ##");
    });
console.log("## active_line 54 ##");
  });
console.log("## active_line 55 ##");

console.log("## active_line 56 ##");
  // Draw the apple
console.log("## active_line 57 ##");
  blessed.box({
console.log("## active_line 58 ##");
    top: apple.x,
console.log("## active_line 59 ##");
    left: apple.y,
console.log("## active_line 60 ##");
    width: 1,
console.log("## active_line 61 ##");
    height: 1,
console.log("## active_line 62 ##");
    style: {
console.log("## active_line 63 ##");
      bg: 'red'
console.log("## active_line 64 ##");
    }
console.log("## active_line 65 ##");
  });
console.log("## active_line 66 ##");
  
console.log("## active_line 67 ##");
  screen.render();
console.log("## active_line 68 ##");
}
console.log("## active_line 69 ##");

console.log("## active_line 70 ##");
function gameLoop() {
console.log("## active_line 71 ##");
  eatApple();
console.log("## active_line 72 ##");
  moveSnake();
console.log("## active_line 73 ##");
  draw();
console.log("## active_line 74 ##");

console.log("## active_line 75 ##");
  setTimeout(gameLoop, 1000);
console.log("## active_line 76 ##");
}
console.log("## active_line 77 ##");

console.log("## active_line 78 ##");
gameLoop();
console.log("## active_line 79 ##");

console.log("## active_line 80 ##");
// Listen for input
console.log("## active_line 81 ##");
screen.render();