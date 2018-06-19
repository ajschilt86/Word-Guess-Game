

var canvas = document.getElementById("canvas");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var x = 500;
var y = 260;



//base//
context.beginPath();
context.moveTo(x-200, y+250);
context.lineTo(x+150, y+250);
context.stroke();

//pole//
context.beginPath();
context.moveTo(x-150, y+250);
context.lineTo(x-150, y-150);
context.stroke();

//hanger horizontal//
context.beginPath();
context.moveTo(x-150, y-150);
context.lineTo(x, y-150);
context.stroke();

//hanger down//
context.beginPath();
context.moveTo(x, y-150);
context.lineTo(x, y-50);
context.stroke();

//head//
context.beginPath();
context.arc(x, y, 50, 0, 2 * Math.PI);
context.stroke();

//body//
context.beginPath();
context.moveTo(x, y+50);
context.lineTo(x, y+150);
context.stroke();

//left hand//
context.beginPath();
context.moveTo(x, y+90);
context.lineTo(x-70, y+70);
context.stroke();

//right hand//
context.beginPath();
context.moveTo(x, y+90);
context.lineTo(x+70, y+70);
context.stroke();

//right leg//
context.beginPath();
context.moveTo(x, y+150);
context.lineTo(x+50, y+200);
context.stroke();

//left leg//
context.beginPath();
context.moveTo(x, y+150);
context.lineTo(x-50, y+200);
context.stroke();

