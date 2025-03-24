let i = 500;
const preview = document.querySelector('.preview');

function isPrime(num){
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        } else {
            return true;
        }
    }
}

while(i >= 1){
    if(isPrime(i) === true){
        const para = document.createElement('p');
        para.textContent += `Prime: ${i}`;
        preview.appendChild(para);
    } 
    i--;
}

