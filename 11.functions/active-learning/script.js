const x = 1;
const preview = document.querySelector('.preview');

function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

function output(value) {
  const para = document.createElement('p');
  preview.appendChild(para);
  para.textContent = `Value: ${value}`;
}