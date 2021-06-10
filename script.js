function _loadEvent() {
     
function toggleMenu() {
 console.log("hello World!");
 document.getElementById("menu-content").classList.toggle("open");
}

  const buttonElement = document.getElementById ("menu-btn");  
    buttonElement.addEventListener("click" , toggleMenu);


}

window.addEventListener("load", _loadEvent);
