const buttonBox = document.querySelector(".button-bar");

buttonBox.addEventListener("click", (e) => {
    if(e.target.dataset.color){
        buttonBox.style.backgroundColor = e.target.dataset.color;
    }
});