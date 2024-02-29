
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

function loadAboutUs(){
    const aboutUs = document.createElement("div")
    const headerDiv = document.createElement("p");
    const line = document.createElement("div");
    const aboutContent = document.createElement("div");
    
    headerDiv.textContent = "About Us";
    aboutContent.textContent = "Welcome to Kfastfood restaurant! Our website is your gateway to a culinary journey, offering a glimpse into our rich history, meticulously crafted menu, and effortless reservation system. Stay updated on promotions and events, explore private dining options, and connect with us for any inquiries. Visit us to experience our passion for flavor, freshness, and hospitality firsthand. We can't wait to welcome you to [Restaurant Name] for an unforgettable dining experience.";
    
    aboutUs.appendChild(headerDiv)
    aboutUs.appendChild(line);
    aboutUs.appendChild(aboutContent);

    return aboutUs;
}

export {
    loadContent,
    loadAboutUs
  };