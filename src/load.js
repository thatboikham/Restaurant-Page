
function loadContent(){
    const mainDiv = document.createElement("div")
    const textDiv = document.createElement("p")
    const inputDiv = document.createElement("input")

    textDiv.textContent = "What are you craving today";
    inputDiv.placeholder = "search what to eat today";

    textDiv.classList.add("text");
    mainDiv.classList.add("main");

    mainDiv.appendChild(textDiv)
    mainDiv.appendChild(inputDiv)

    return mainDiv;
}

export default loadContent;