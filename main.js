var mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
radius=30;
width=5;
document.getElementById("color_input").value=color;
document.getElementById("radius_input").value=radius;
document.getElementById("width_input").value=width;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color_input").value;
radius=document.getElementById("radius_input").value;
width=document.getElementById("width_input").value;
mouse_event="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_event="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);



function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouse_event=="mouseDown"){
console.log("current position of x and y");
console.log(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
}
}