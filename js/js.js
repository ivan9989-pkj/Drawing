
// estas son las constantes que haran cada apartado de este codigo ademas que son las id de puestas en el html

const canvas= document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn=document.getElementById('decrease');
const sizeEl= document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const ctx = canvas.getContext('2d');
let size =10;
let  isPressed= false;
colorEl.value= 'black';
let color = colorEl.value;
let x;
let y;
// Se encagara que mientras es pulsado el click funcionara y dibujara
canvas.addEventListener('mousedown',(e)=>{
    isPressed= true;
    x = e.offsetX;
    y = e.offsetY;

})
// Se encargara de cuando no se hace click para deje de dibujar
document.addEventListener('mouseup', (e)=>{
    isPressed= false;
    x= undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e)=>{
    if (isPressed){
        const x2= e.offsetX;
        const y2= e.offsetY;
        drawCircle(x2 , y2);
        drawLine(x , y , x2 , y2);
        x = x2;
        y = y2;

    }
})
// Se encarga que se dibujen circulos
function drawCircle(x , y){
    ctx.beginPath();
    ctx.arc(x , y , size , 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
}
// Este servira para diujar las lineas
function drawLine (x1 , y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.LineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.LineWidth = size*2;
    ctx.stroke();
}
// sera el que se va actualizando para el cambio de tamaño del pincel
function updateSizeOnScreen(){
    sizeEl.innerText = size;
}
// Incrementa el pincel
increaseBtn.addEventListener('click',()=>{
    size+= 5;
    if (size > 50){
        size = 50;

    }
    updateSizeOnScreen();
})
// disminuye el pincel 
decreaseBtn.addEventListener('click',()=>{
    size-= 5;
    if (size < 5){
        size = 5;

    }
    updateSizeOnScreen()
})

// permite cambiar el color del pincel
colorEl.addEventListener('change',(e)=> color =e.target.value);
// limpia lo dibujado
clearEl.addEventListener('click',() => ctx.clearRect(0, 0, canvas.width , canvas.height));





