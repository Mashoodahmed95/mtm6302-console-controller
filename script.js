

//for the title chnage//
function setTitle() {
    const titleText = prompt("Enter new title:");
    const titleElement = document.getElementById("title");
    titleElement.textContent = titleText;
}


//description//

function setDescription() {
    const descriptionText = prompt("Enter new description:");
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = descriptionText;
}

//backroundcolor//

function setBackgroundColor() {
    const bgColor = prompt("Enter background color (e.g., #ff5733):");
    document.body.style.backgroundColor = bgColor;
}

// font color//
function setFontColor() {
    const fontColor = prompt("Enter font color (e.g., #333333):");
    const elements = document.querySelectorAll("h1, p");
    elements.forEach(element => {
        element.style.color = fontColor;
    });
}

// theme setup light and dark//

function setTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme");
    if (theme === "light") {
        document.body.classList.add("light-theme");
    } else if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

setTheme("light");
