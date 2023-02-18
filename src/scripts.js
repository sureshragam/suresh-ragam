let hamburgerEl = document.getElementById("hamburger");
let hamburgerContainerEl = document.getElementById("hamburgerContainer");

hamburgerEl.addEventListener("click", () =>{
    console.log("im clicked")
    hamburgerContainerEl.classList.toggle("hamburger-container-hide")
})