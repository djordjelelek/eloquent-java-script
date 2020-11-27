//trapezoid
let trapezoid = document.getElementById("trapezoid").getContext("2d");
trapezoid.strokeStyle = "red";
trapezoid.lineWidth = 5;
trapezoid.beginPath();
trapezoid.moveTo(40, 30);
trapezoid.lineTo(5, 100);
trapezoid.lineTo(140, 100);
trapezoid.lineTo(100, 30);
trapezoid.closePath();
trapezoid.stroke();

//lines
let lines = document.getElementById("lines").getContext("2d");
lines.strokeStyle = "blue";
lines.lineWidth = 3;
lines.beginPath();
lines.moveTo(5, 5);
lines.lineTo(150, 10);
lines.lineTo(5, 20);
lines.lineTo(150, 30);
lines.lineTo(5, 40);
lines.lineTo(150, 50);
lines.lineTo(5, 60);
lines.lineTo(150, 70);
lines.lineTo(5, 80);
lines.lineTo(150, 90);
lines.lineTo(5, 100);
lines.stroke();

//spiral
let spiral = document.getElementById("spiral").getContext("2d");
spiral.strokeStyle = "red";
spiral.lineWidth = 5;
spiral.beginPath();
spiral.arc(90, 50, 10, 0, 3);
spiral.arc(95, 50, 15, 3, 0);
spiral.arc(90, 50, 20, 0, 3);
spiral.arc(95, 50, 25, 3, 0);
spiral.arc(90, 50, 30, 0, 3);
spiral.arc(95, 50, 35, 3, 0);
spiral.arc(90, 50, 40, 0, 3);
spiral.arc(95, 50, 45, 3, 0);
spiral.arc(90, 50, 50, 0, 3);
spiral.stroke();