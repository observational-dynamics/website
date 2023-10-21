const blessed = require('blessed');
const screen = blessed.screen();

let pixel = (x, y) => ({ x: x, y: y });

let snake = [pixel(5,5)];
let direction = 'right'; 
let apple = pixel(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));

// Set key bindings
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  return process.exit(0);
});

screen.key(['up', 'down', 'left', 'right'], (ch, key) => {
  direction = key.name;
});

function eatApple() {
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
        snake[snake.length] = apple;
        apple = pixel(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
    }
}

function moveSnake() {
    let tail = snake.pop();
    if(direction === 'right') tail.x = snake[0].x + 1;
    else if(direction === 'down') tail.y = snake[0].y + 1;
    else if(direction === 'left') tail.x = snake[0].x - 1;
    else if(direction === 'up') tail.y = snake[0].y - 1;
    snake.unshift(tail);
}

function draw() {
  screen.clear();

  snake.forEach(pixel => {
    blessed.box({
        top: pixel.x,
        left: pixel.y,
        width: 1,
        height: 1,
        style: {
          bg: 'white'
        }
    });
  });

  blessed.box({
    top: apple.x,
    left: apple.y,
    width: 1,
    height: 1,
    style: {
      bg: 'red'
    }
  });
  
  screen.render();
}

function gameLoop() {
  eatApple();
  moveSnake();
  draw();

  setTimeout(gameLoop, 1000);
}

gameLoop();

screen.render();