openNavButton = document.getElementById('barra_sup');
nav = document.getElementById('menu_navegacion');

openedNav = false;

openNavButton.addEventListener("click",()=>{
    if (!openedNav) {
        nav.style.animation= "aparecer 1s forwards";
        openedNav = true;
    } else {
        nav.style.animation= "desaparecer 1s forwards";
        openedNav = false;
    }
    
})
