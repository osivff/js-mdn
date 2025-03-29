let button = document.querySelector(".off");

button.addEventListener("click", (e) => {
    if(e.target.textContent === "Machine is on"){
        e.target.textContent = "Machine is off";
    } else {
        e.target.textContent = "Machine is on";
    }
});

