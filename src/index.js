import './style.css'
import {loadContent, loadAboutUs} from './load.js'

const contenDiv = document.getElementById("content")
const AboutBtn = document.getElementById("about")
console.log(contenDiv)
contenDiv.appendChild(loadContent())

