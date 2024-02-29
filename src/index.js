import './style.css'
import {loadContent, loadAboutUs} from './load.js'

const contenDiv = document.getElementById("content")
const homeBtn = document.getElementById("home")
const aboutBtn = document.getElementById("about")

//event listeners
// console.log(contenDiv)
// contenDiv.appendChild(loadContent())
homeBtn.addEventListener("click", () => {
    contenDiv.innerHTML = "";
    contenDiv.appendChild(loadContent());
});

aboutBtn.addEventListener("click", () => {
    contenDiv.innerHTML = "";
    contenDiv.appendChild(loadAboutUs());
});

