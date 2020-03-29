const newNameInput = document.querySelector(".newNameInput");
const newNameButton = document.querySelector(".newNameButton");
const testowe = document.querySelector(".nameInfo");
const newNameWindow = document.querySelector(".newNameWindow");
const mainWindow = document.querySelector(".mainWindow");
const clearStorage = document.querySelector(".clearStorage");

if (window.localStorage.getItem('savedName') == null) {
    newNameButton.addEventListener('click', function () {
        if (newNameInput.value == "") {
            alert('Proszę podać imie');
        } else {
            const newName = newNameInput.value;
            localStorage.setItem('savedName', newName);
            testowe.innerText = window.localStorage.getItem('savedName');
            newNameWindow.classList.add("invisible");
            mainWindow.classList.add("visible");
            console.log(window.localStorage.getItem('savedName'));
            if (mainWindow.className == "mainWindow visible") {
                setTimeout(function () {
                    window.location.href = "./dashboard.html";
                }, 1000);
            }
        }
    });
} else {
    testowe.innerText = window.localStorage.getItem('savedName');
    newNameWindow.classList.add("invisible");
    mainWindow.classList.add("visible");
    if (mainWindow.className == "mainWindow visible") {
        setTimeout(function () {
            window.location.href = "./dashboard.html";
        }, 1000);
    };

}

const recipeListWindow = document.querySelector(".recipeList");


menuRecipes.addEventListener("click", function () {

    mainWindow.classList.remove("visible");
    newNameWindow.classList.remove("visible");
    newNameWindow.classList.add("invisible");
    recipeListWindow.classList.add("visible");

});


newNameInput