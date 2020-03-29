const testowe = document.querySelector(".nameInfo"); // wpiszemy w okno w Header
testowe.innerText = window.localStorage.getItem('savedName');

const recipeName = document.querySelector('#name');
const recipeDesc = document.querySelector('#description');
const recipeInst = document.querySelector('#instructions');
const recipeIngr = document.querySelector('#ingredients');

const instList = document.querySelector('#newInstructions');
const ingrList = document.querySelector('#newIngredients');

const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    const allRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (recipeName.value == "") {
        alert('Nazwa nie może być pusta.');
    } else if (recipeDesc.value == "") {
        alert('Opis nie może być pusty.');
    } else if (instList.innerText == "") {
        alert('Lista instrukcji nie może być pusta.');
    } else if (ingrList.innerText == "") {
        alert('Lista składników nie może być pusta.');
    } else {
        console.log("Zapisuję i zamykam");
        if (allRecipes == null) {
            newRecipe.id = 1;
        } else {
            newRecipe.id = allRecipes.length + 1;
        }
        newRecipe.title = recipeName.value;
        recipeName.value = "";
        newRecipe.description = recipeDesc.value;
        recipeDesc.value = "";
        instList.childNodes.forEach(function (element) {
            newRecipe.instructions.push(element.innerText.replace(/\s+/g, ''))
        })
        ingrList.childNodes.forEach(function (element) {
            newRecipe.ingredients.push(element.innerText.replace(/\s+/g, ''))
        })
        instList.innerHTML = "";
        ingrList.innerHTML = "";



        saveRecipeToLocalStorage(newRecipe);
        console.log("Zapisano: ", newRecipe);
        alert("Przepis zapisany do localStorage");
        window.location.href = "./recipes.html";
    }
});

const clearStorageButton = document.querySelector("#clearStorage");
clearStorageButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    recipeName.value = "";
    recipeDesc.value = "";
    recipeInst.value = "";
    recipeIngr.value = "";
    instList.innerHTML = "";
    ingrList.innerHTML = "";

    alert("localStorage wyczyszczone");
});

const addInstButton = document.querySelector('#addInst');
addInstButton.addEventListener('click', function () {
    if (recipeInst.value != "") {
        console.log("Dodaję instrukcję");
        renderSingleInstruction(recipeInst.value);
        recipeInst.value = "";
    } else {
        alert('Nie można dodać pustej instrukcji!');
    }
});

const addIngrButton = document.querySelector('#addIngr');
addIngrButton.addEventListener('click', function () {
    console.log("Dodaję Składnik");
    if (recipeIngr.value != "") {
        renderSingleIngredient(recipeIngr.value);
        recipeIngr.value = "";
    } else {
        alert('Nie można dodać pustego składnika!');
    }
});

const newRecipe = {
    id: 0,
    title: "",
    description: "",
    instructions: [],
    ingredients: []
};

var listInstructionItemCounter = 0;

function renderSingleInstruction(instruction) {
    var newLi = document.createElement("li");
    newLi.innerHTML = instruction + ' <i class="fas fa-edit" id="editInst"></i>' + ' <i class="far fa-trash-alt" id="deleteInst"></i>';
    instList.appendChild(newLi);
    const editButton = document.querySelectorAll('#editInst');
    editButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToEdit = this.parentElement;
            liToEdit.toggleAttribute("contenteditable");
        });
    });
    const deleteButton = document.querySelectorAll('#deleteInst');
    deleteButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToDelete = this.parentElement;
            liToDelete.parentElement.removeChild(liToDelete);
        });
    });
}

function renderSingleIngredient(ingredient) {
    var newLi = document.createElement("LI");
    newLi.innerHTML = ingredient + ' <i class="fas fa-edit" id="editIngr"></i>' + ' <i class="far fa-trash-alt" id="deleteIngr"></i>';
    ingrList.appendChild(newLi);
    const editButton = document.querySelectorAll('#editIngr');
    editButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToEdit = this.parentElement;
            liToEdit.toggleAttribute("contenteditable");
        });
    });
    const deleteButton = document.querySelectorAll('#deleteIngr');
    deleteButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToDelete = this.parentElement;
            liToDelete.parentElement.removeChild(liToDelete);
        });
    });
}


function saveRecipeToLocalStorage(newObject) {
    var dataFromLocalStorage = [];
    if (localStorage.getItem("recipes") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));

    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}
const allRecipes = JSON.parse(localStorage.getItem("recipes"));