const input = document.querySelector('.numberInput');
const para = document.querySelector('p');
const button = document.querySelector('.btn');

function squared(num) {
    return num * num;
}
  
function cubed(num) {
    return num * num * num;
}
  
function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
}

function display(){

}

input.addEventListener("change", () => {
    const number = parseFloat(input.value);
    if(isNaN(input.value)){
        para.textContent = "Input a number please";
    } else {
        para.textContent = ` Squared: ${squared(number)} | `;
        para.textContent += ` Cubed: ${cubed(number)} | `;
        para.textContent += ` Factorial: ${cubed(number)}`;

    }
})