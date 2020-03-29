const testowe = document.querySelector(".nameInfo");
testowe.innerText = window.localStorage.getItem('savedName');

const addTableRow = document.querySelector("#addTableRow");


function renderRecipesList() {
    const allRecipes = JSON.parse(localStorage.getItem("recipes"));
    allRecipes.forEach(function (element) {
        const mojeID = element.id;
        const mojeName = element.title;
        const mojOpis = element.description;

        const newRow = document.createElement('tr');
        newRow.classList.add("row");
        newRow.classList.add("tableBody");
        addTableRow.appendChild(newRow);

        const elementID = document.createElement('td');
        elementID.classList.add("col-1");
        newRow.appendChild(elementID);
        elementID.innerText = mojeID;

        const elementName = document.createElement('td');
        elementName.classList.add("col-2");
        newRow.appendChild(elementName);
        elementName.innerText = mojeName;

        const elementNowHow = document.createElement('td');
        elementNowHow.classList.add("col-4");
        newRow.appendChild(elementNowHow);
        elementNowHow.innerText = mojOpis;

        const elementInfo = document.createElement('td');
        elementInfo.classList.add("col-1");
        newRow.appendChild(elementInfo);
        const elementIkons = document.createElement('div');
        elementIkons.innerHTML = '<i class="far fa-edit"></i>' + '<i class="far fa-trash-alt"></i>';
        elementInfo.appendChild(elementIkons);

        const editButton = document.querySelectorAll('.fa-edit');
        editButton.forEach(function (element) {
            element.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                console.log('nie ma gdzie edytować');
            });
        });

        const trashButton = document.querySelectorAll('.fa-trash-alt');
        trashButton.forEach(function (element) {
            element.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                const rowDelete = this.parentElement.parentElement.parentElement;
                rowDelete.parentElement.removeChild(rowDelete);
                console.log('ekstra');
                localStorage.removeItem('recipes');
                const deleteID = this.parentElement.parentElement.parentElement.firstChild.innerText - 1;
                allRecipes.splice(deleteID, 1);
                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                alert('Pomyślnie usunięto przepis.')
            });
        });

    });
}
renderRecipesList();