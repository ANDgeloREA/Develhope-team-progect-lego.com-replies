const $triggerNav = document.querySelectorAll(".trigger-nav");
const $contentNav = document.querySelectorAll(".content-nav");
const menuAside = document.querySelector('.menu-aside-container');
const closeMenuAside = document.querySelector('.nav-close-modal')
const blockBody = document.querySelector(".menu-aside-body-none")
const $body = document.querySelector("body")


function navCloseModal(){
    menuAside.className = 'menu-aside-container'
    blockBody.className = "menu-aside-body-none"
}

closeMenuAside.onclick = navCloseModal;


$triggerNav.forEach($el => {
    $el.addEventListener("click", (event) => {
     
      $contentNav.forEach(($_contentNav) => $_contentNav.classList.remove("visible"));
      
      const id = event.target.dataset.id;
     
      document.getElementById(id).classList.add("visible");
      menuAside.className = 'menu-aside-container-block'
      blockBody.className = "menu-aside-body"
    });
  });
