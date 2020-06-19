import { transformText } from "./script2.js";

let button = document.querySelector(".button");
button.addEventListener("click", checkName);

function checkName() {
    let inputValue = document.querySelector(".input").value;
    let show = document.querySelector(".result");
    return (show.innerHTML = transformText(inputValue));
}