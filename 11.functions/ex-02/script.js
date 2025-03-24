const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const preview = document.querySelector('.preview');
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

function drawRectangle(){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

preview.append(canvas);

