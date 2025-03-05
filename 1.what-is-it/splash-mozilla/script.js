let myImg = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeader = document.querySelector("h1");

myImg.addEventListener("click", () => {
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "./firefox-icon.png"){
        myImg.setAttribute("src", "./oscarx256.jpg");
    } else{
        myImg.setAttribute("src", "./firefox-icon.png");
    }
})

function setUserName(){
    let myName = prompt("Please enter name: ")
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeader.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else {
    let storedName = localStorage.getItem("name");
    myHeader.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function(){
    setUserName();
}