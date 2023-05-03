const language = document.querySelector('.region');
const modal = document.querySelector('.changeLanguage')
const closeX = document.querySelector('.closeModal')
function openModal() {
    modal.style.display = 'block'
}

function closeModal(){
    modal.style.display = 'none'
    // adnLanguage.style.display = 'none'
    // adsLanguage.style.display = 'none'
    // euLanguage1.style.display = 'none'
    // euLanguage2.style.display = 'none'
    // euLanguage3.style.display = 'none'
    // euLanguage4.style.display = 'none'
    // euLanguage5.style.display = 'none'
    // asLanguage1.style.display = 'none'
    // asLanguage2.style.display = 'none'
    // moLanguage.style.display = 'none'
}

language.onclick = openModal;
closeX.onclick = closeModal;

// const adn = document.querySelector('.adn');
// const adnLanguage = document.querySelector('.adnLanguage')
// const ads = document.querySelector('.ads');
// const adsLanguage = document.querySelector('.adsLanguage')
// const eu = document.querySelector('.eu');
// const euLanguage1 = document.querySelector('.euLanguage1')
// const euLanguage2 = document.querySelector('.euLanguage2')
// const euLanguage3 = document.querySelector('.euLanguage3')
// const euLanguage4 = document.querySelector('.euLanguage4')
// const euLanguage5 = document.querySelector('.euLanguage5')
// const as = document.querySelector('.as');
// const asLanguage1 = document.querySelector('.asLanguage1')
// const asLanguage2 = document.querySelector('.asLanguage2')
// const mo = document.querySelector('.mo');
// const moLanguage = document.querySelector('.moLanguage')

// function openLanguageadn(){
//     adnLanguage.style.display = 'flex'
//     adsLanguage.style.display = 'none'
//     euLanguage1.style.display = 'none'
//     euLanguage2.style.display = 'none'
//     euLanguage3.style.display = 'none'
//     euLanguage4.style.display = 'none'
//     euLanguage5.style.display = 'none'
//     asLanguage1.style.display = 'none'
//     asLanguage2.style.display = 'none'
//     moLanguage.style.display = 'none'
// }
// function openLanguageads(){
//     adsLanguage.style.display = 'flex'
//     adnLanguage.style.display = 'none'
//     euLanguage1.style.display = 'none'
//     euLanguage2.style.display = 'none'
//     euLanguage3.style.display = 'none'
//     euLanguage4.style.display = 'none'
//     euLanguage5.style.display = 'none'
//     asLanguage1.style.display = 'none'
//     asLanguage2.style.display = 'none'
//     moLanguage.style.display = 'none'
// }
// function openLanguageeu(){
//     adsLanguage.style.display = 'none'
//     adnLanguage.style.display = 'none'
//     euLanguage1.style.display = 'flex'
//     euLanguage2.style.display = 'flex'
//     euLanguage3.style.display = 'flex'
//     euLanguage4.style.display = 'flex'
//     euLanguage5.style.display = 'flex'
//     asLanguage1.style.display = 'none'
//     asLanguage2.style.display = 'none'
//     moLanguage.style.display = 'none'
// }
// function openLanguageas(){
//     adnLanguage.style.display = 'none'
//     adsLanguage.style.display = 'none'
//     euLanguage1.style.display = 'none'
//     euLanguage2.style.display = 'none'
//     euLanguage3.style.display = 'none'
//     euLanguage4.style.display = 'none'
//     euLanguage5.style.display = 'none'
//     asLanguage1.style.display = 'flex'
//     asLanguage2.style.display = 'flex'
//     moLanguage.style.display = 'none'
// }
// function openLanguagemo(){
//     adnLanguage.style.display = 'none'
//     adsLanguage.style.display = 'none'
//     euLanguage1.style.display = 'none'
//     euLanguage2.style.display = 'none'
//     euLanguage3.style.display = 'none'
//     euLanguage4.style.display = 'none'
//     euLanguage5.style.display = 'none'
//     asLanguage1.style.display = 'none'
//     asLanguage2.style.display = 'none'
//     moLanguage.style.display = 'flex'
// }

// adn.onclick = openLanguageadn;
// ads.onclick = openLanguageads;
// eu.onclick = openLanguageeu;
// as.onclick = openLanguageas;
// mo.onclick = openLanguagemo;


const $trigger = document.querySelectorAll(".trigger");
const $fContent = document.querySelectorAll(".f-content");

$trigger.forEach($el => {
  $el.addEventListener("click", (event) => {
    // Prima levo la classe visible da tutti i `div.content`
    $fContent.forEach(($_fContent) => $_fContent.classList.remove("visible"));
    // Determina il div corretto sulla base del click
    const id = event.target.dataset.id;
    // Vado ad aggiungere la classe `visible` al div corretto usando l'id appena preso
    document.getElementById(id).classList.add("visible");
  });
});
