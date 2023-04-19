let textElem1 = document.getElementById("text-1")

let textElem2 = document.getElementById("text-2")


document.getElementById("left-arrow").addEventListener("click", textTranslate);
document.getElementById("right-arrow").addEventListener("click", textTranslate);

function textTranslate() {

    if (textElem1.className === "not-translate" && textElem2.className === "not-translate") {
        textElem1.className = "full-translate"
        textElem2.className = "full-translate"
    } else {
        textElem1.className = "not-translate";
        textElem2.className = "not-translate";
    }
}