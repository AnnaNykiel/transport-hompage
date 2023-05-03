{
    
const onChangeBackgroundClick = () => {
    const bodyElement = document.querySelector(".body-js");
    const themeNameElement = document.querySelector('.themeName-js');
    bodyElement.classList.toggle("body--dark");
    themeNameElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
};


const init = () => {
    const buttonElement = document.querySelector('.button-js');


buttonElement.addEventListener("click", onChangeBackgroundClick);
};

init ();
   
}
    
    




