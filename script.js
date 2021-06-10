function _loadEvent() {

  //const bodyElement = document.getElementById("body");  
  //const buttonElement = document.getElementById("menu-btn");  

  const elements = {
    body: document.getElementById("body"),
    button: document.getElementById("menu-btn"),
    sections: document.querySelectorAll("section"),
    menuUL:document.querySelector("#menu-content ul")
  }
     
  for (const section of elements.sections) {
    //console.log(section.innerHTML)
    elements.menuUL.insertAdjacentHTML("beforeend", `
      <li><a href="#${section.getAttribute("id")}">${section.querySelector("h2").innerHTML}</a></li>
    `)
  }

  function toggleMenu() {
    elements.body.classList.toggle("menu-opened"); //global state - local affect
  }

  elements.button.addEventListener("click", toggleMenu);

}

window.addEventListener("load", _loadEvent);
