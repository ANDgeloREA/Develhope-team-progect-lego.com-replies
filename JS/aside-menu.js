const $triggerNav = document.querySelectorAll(".trigger-nav");
const $contentNav = document.querySelectorAll(".content-nav");

const menuAside = document.querySelector('.menu-aside-container');
const closeMenuAside = document.querySelector('.nav-close-modal')


function navOpenModal() {
    
   

   
      
      
}

function navCloseModal(){
    menuAside.className= 'menu-aside-container'
    
}

//$triggerNav.onclick = navOpenModal;
closeMenuAside.onclick = navCloseModal;



//Switch-Menù



$triggerNav.forEach($el => {
    $el.addEventListener("click", (event) => {
     
      $contentNav.forEach(($_contentNav) => $_contentNav.classList.remove("visible"));
      
      const id = event.target.dataset.id;
     
      document.getElementById(id).classList.add("visible");
      menuAside.className = 'menu-aside-container-block'
    });
  });
