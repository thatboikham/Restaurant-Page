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
    contenDiv.style.alignItems = "center";
    contenDiv.style.backgroundImage = 'url("/src/foodcover.jpg")'
    contenDiv.style.backgroundSize = "cover";
    contenDiv.appendChild(loadContent());
});

aboutBtn.addEventListener("click", () => {
    contenDiv.innerHTML = "";
    contenDiv.style.alignItems = "initial";
    contenDiv.style.background = "#f5f5f5";
    contenDiv.appendChild(loadAboutUs());
});

