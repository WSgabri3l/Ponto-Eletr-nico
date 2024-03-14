const formButton = document.querySelector("#contact");
const formDiv = document.querySelector("#form");
const closeButton = document.querySelector("#close");

formButton.addEventListener("click", (event) =>{
    
    formDiv.style.display = "block";
})

closeButton.addEventListener("click", (event) =>{

    formDiv.style.display = "none";
})

