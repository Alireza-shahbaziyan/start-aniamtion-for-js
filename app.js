const canvas = document.querySelector('canvas');    // choice canvas tag

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
const c = canvas.getContext('2d') // c means Canvas

const count = 5;

class Ball {
    constructor() {
        this.r = 40;
        this.x = random(0 + this.r, window.innerWidth);
        this.y = random(0 + this.r, window.innerHeight);
        this.vx = random(0,7);
        this.vy = random(0,7);
        this.draw()
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = 'white'
        c.fill()
    }
    update() {
        if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.vx = -this.vx
        }
        if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.vy = -this.vy
        }
        this.x +=this.vx;
        this.y += this.vy;
        this.draw()
    }
}

let balls = []

for (let i = 0; i < count; i++) {
    balls.push(new Ball)
}

function animation() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    balls.forEach(ball => {
        ball.update();
    });
    requestAnimationFrame(animation);
}

animation()



// Returns an integer random number between min (included) and max (included)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

