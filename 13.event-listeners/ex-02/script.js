const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}
    let x = 50;
    let y = 50;

    const size = 30;

    drawCircle(x, y, size);

document.addEventListener("keydown", (e) => {
    if(e.key === 'w' && y - size > 0){
        y -= 10;
        drawCircle(x, y, size);
    } else if(e.key === 's' && y + size < canvas.height){
        y += 10;
        drawCircle(x, y, size);
    } else if(e.key === 'a' && x - size > 0){
        x -= 10;
        drawCircle(x, y, size);
    } else if(e.key === 'd' && x + size < canvas.width){
        x += 10;
        drawCircle(x, y, size);
    }
});