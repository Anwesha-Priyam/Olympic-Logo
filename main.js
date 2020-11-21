canvas=document.getElementById("myDrawingArea")
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="aquamarine";
ctx.lineWidth=11;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=10;
ctx.arc(250, 210, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=10;
ctx.arc(350, 210, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=10;
ctx.arc(450, 210, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=9;
ctx.arc(300, 250, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=9;
ctx.arc(400, 250, 40, 0, 360);
ctx.stroke();
