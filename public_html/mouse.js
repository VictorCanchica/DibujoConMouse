var d= document.getElementById("dibujo");
var lienzo=d.getContext("2d");
document.addEventListener("mousedown", mClick);
document.addEventListener("mousemove", mMove);
document.addEventListener("mouseup", mClickUp);
document.getElementById("red").addEventListener("click",rojo);
document.getElementById("blue").addEventListener("click",blue);
document.getElementById("yellow").addEventListener("click",yellow);
document.getElementById("black").addEventListener("click",black);
var color="black";
var estado=0;
var x;
var y;
var x1;
var y1;
function black(){color="black";}
function yellow(){color="yellow";}
function blue(){color="blue";}
function rojo(){color="red";}
function mClick(clikeo){
   estado=1;
   x=clikeo.clientX;
   y=clikeo.clientY;
}

function mMove(mov){
    x1=mov.clientX;
    y1=mov.clientY;
    if(estado==1){dibujar(color, x,y,x1,y1)
    x=x1;
    y=y1;    
}
    }
    

function mClickUp(up){
    estado=0; 
}


function dibujar(color, x_begin, y_begin, x_end, y_end){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(x_begin,y_begin);
    lienzo.lineTo(x_end,y_end);
    lienzo.stroke();
    lienzo.closePath();
}