//box
let box = document.getElementById("box").getContext("2d");
box.fillStyle = "blue";
box.strokeStyle = "red";
box.lineWidth = 10;
box.fillRect(10, 10, 100, 100);
box.strokeRect(10, 10, 100, 100);

//line
let line = document.getElementById("line").getContext("2d");
line.strokeStyle = "green";
line.lineWidth = 10;
line.beginPath();
line.moveTo(10, 10);
line.lineTo(100, 100);
line.stroke();

//triangle
let triangle = document.getElementById("triangle").getContext("2d");
triangle.fillStyle = "yellow";
triangle.beginPath();
triangle.moveTo(1, 1);
triangle.lineTo(10, 100);
triangle.lineTo(50, 20);
triangle.fill();

//curves_quadratic
let curves_quadratic = document
    .getElementById("curves_quadratic")
    .getContext("2d");
curves_quadratic.strokeStyle = "red";
curves_quadratic.lineWidth = "5";
curves_quadratic.beginPath();
curves_quadratic.moveTo(0, 90);
curves_quadratic.quadraticCurveTo(50, 10, 90, 90);
curves_quadratic.lineTo(50, 10);
curves_quadratic.closePath();
curves_quadratic.stroke();

//curves_bezier
let curves_bezier = document.getElementById("curves_bezier").getContext("2d");
curves_bezier.strokeStyle = "black";
curves_bezier.lineWidth = "5";
curves_bezier.beginPath();
curves_bezier.moveTo(0, 90);
curves_bezier.bezierCurveTo(10, 10, 90, 10, 80, 80);
curves_bezier.lineTo(50, 10);
curves_bezier.closePath();
curves_bezier.stroke();

//curves_arc
let curves_arc = document.getElementById("curves_arc").getContext("2d");
curves_arc.strokeStyle = "brown";
curves_arc.lineWidth = "5";
curves_arc.beginPath();
curves_arc.arc(50, 50, 30, 0, 7);
curves_arc.stroke();