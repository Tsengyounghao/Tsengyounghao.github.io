let canvas = document.getElementById("myCanvas");

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let c = canvas.getContext('2d');

let colors = ["#A020F0", "#5CACEE", "#0FDDAF","#00688B"];

function Circle(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.startX = 0;
  this.endX = innerWidth;
  this.startY = 0;
  this.endY = innerHeight;
  this.speed = 1.8;//Math.floor(10*(Math.random()));
  this.dx = this.speed*(Math.random() - 0.5);
  this.dy = this.speed*(Math.random() - 0.5);

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle= color;
    c.fill();
  }

  this.update = function () {
    if(this.speed === 0){
      this.speed = this.radius;
      this.dx = this.speed*(Math.random() - 0.5);
      this.dy = this.speed*(Math.random() - 0.5);
    }
    if (this.x > this.endX) {
      this.dx = -this.dx;
    }
    if (this.y > this.endY) {
      this.dy = -this.dy;
    }

    if (this.x < this.startX) {
      this.dx = -this.dx;
      this.dy = -this.dy;
    }
    if (this.y < this.startY) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
    //console.log("2");
  }
}

let circlesArray = [];

for( let i = 0; i < (innerHeight+innerWidth)/2; i++) {
  let x = Math.random() * width ;
  let y = Math.random() * height;
  let r = Math.random() * innerHeight/50;
  let i = Math.floor(Math.random() * colors.length);

  let circle = new Circle(x, y, r, colors[i]);

  circlesArray.push(circle);

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);

  for(let circle of circlesArray) {
    circle.update();
  }
}

animate();
/*
let x = Math.random() * width ;
let y = Math.random() * height;
let r = Math.random() * 10;
let i = Math.floor(Math.random() * colors.length);
let circle = new Circle(x, y, r, colors[i]);
function animate() {
  requestAnimationFrame(animate);
  //console.log("1");
  c.clearRect(0,0, innerWidth, innerHeight);
  circle.update();
}
animate();*/