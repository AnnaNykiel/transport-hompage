const buttonElement = document.querySelector('.button-js');
const bodyElement = document.querySelector(".body-js");
const themeNameElement = document.querySelector('.themeName-js');

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--dark");
    
    themeNameElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
});




