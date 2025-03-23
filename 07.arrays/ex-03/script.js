let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
myArray.pop();
myArray.push("Neo", "Goku");
let newArray = [];


for(let i = 0; i <= myArray.length -1; i++){
    newArray.push(`${myArray[i]}(${i})`);
}

console.log(newArray.join("-"));