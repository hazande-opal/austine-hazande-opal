const hamMenu = document.querySelector('.hamburger-menu-container');
const collapsedNabar = document.querySelector('.js-collapsed-navbar');
const mainContent = document.querySelector('.js-main-content');

hamMenu.addEventListener('click', ()=>{
    if(collapsedNabar.style.display === "block"){
        collapsedNabar.style.display = "none"
    }
    else{
        collapsedNabar.style.display = "block";
    }   
});



