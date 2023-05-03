const searchButton  = document.querySelector(".btn-search")
const searchbar = document.querySelector(".searchbar-onclick")
const search= document.querySelector(".nav-bot-searchbar")
const closeButton = document.querySelector(".closeSearch")

function openSearchBar(){
    search.style.display = 'none'
    searchbar.style.display = 'flex'
}

closeButton.addEventListener("click",closeSearchBar)

function closeSearchBar(event){
    search.style.display = 'flex'
    searchbar.style.display = 'none'
    event.preventDefault();
}

search.onclick = openSearchBar;



