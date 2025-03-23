const list = document.querySelector('.ul');
const totalBox = document.querySelector('.p');
let total = 0;
const products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];


list.textContent = "";
totalBox.textContent = "";

for(const product of products){
    let price = [];
    let name = [];
    let arr = [];
    arr = product.split(":");
    name = arr[0];
    price = Number(arr[1]);

    const listItem = document.createElement("li");
    listItem.textContent = `${name} - ${price}`;
    list.append(listItem);

    total += price;
}

totalBox.textContent = 'Total: $' + total.toFixed(2);