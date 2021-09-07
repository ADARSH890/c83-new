var last_position_x,last_position_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouse_Event="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    lineWidth=document.getElementById("linewidth").value;
    mouse_Event="mouseDown";
    

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    
    mouse_Event="mouseUp";
    

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    
    mouse_Event="mouseLeave";
    

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if(mouse_Event=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(last_position_x ,last_position_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
last_position_x=current_position_of_mouse_x;
last_position_y=current_position_of_mouse_y;
    
    
    

}

function ca(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}



