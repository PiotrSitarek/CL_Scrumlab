const allRecipes = JSON.parse(localStorage.getItem("recipes"));
if (allRecipes != null) {

    const testowe = document.querySelector(".nameInfo");
    testowe.innerText = window.localStorage.getItem('savedName');

    let planName = document.querySelector('#planName');
    let planDescription = document.querySelector('#planDescription');
    let weekNumber = document.querySelector('#weekNumber');

    let saveButton = document.querySelector('#savePlan');
    saveButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (planName.value != "" && planDescription.value != "" && weekNumber.value != "") {
            console.log('Push that button');
            const allPlans = JSON.parse(localStorage.getItem("plan"));
            if (allPlans == null) {
                newPlan.id = 1;
            } else if (allPlans.length >= 1) {
                newPlan.id = allPlans[allPlans.length - 1].id + 1;
            };
            newPlan.title = planName.value;
            planName.value = "";
            newPlan.description = planDescription.value;
            planDescription.value = "";
            newPlan.weekNumber = weekNumber.value;
            weekNumber.value = "";

            newPlan.monday.push(mondayBreakfast.value);
            newPlan.monday.push(mondaySecBreakfast.value);
            newPlan.monday.push(mondaySoup.value);
            newPlan.monday.push(mondayMainCourse.value);
            newPlan.monday.push(mondaySupper.value);


            newPlan.tuesday.push(tuesdayBreakfast.value);
            newPlan.tuesday.push(tuesdaySecBreakfast.value);
            newPlan.tuesday.push(tuesdaySoup.value);
            newPlan.tuesday.push(tuesdayMainCourse.value);
            newPlan.tuesday.push(tuesdaySupper.value);


            newPlan.wednesday.push(wednesdayBreakfast.value);
            newPlan.wednesday.push(wednesdaySecBreakfast.value);
            newPlan.wednesday.push(wednesdaySoup.value);
            newPlan.wednesday.push(wednesdayMainCourse.value);
            newPlan.wednesday.push(wednesdaySupper.value);


            newPlan.thursday.push(thursdayBreakfast.value);
            newPlan.thursday.push(thursdaySecBreakfast.value);
            newPlan.thursday.push(thursdaySoup.value);
            newPlan.thursday.push(thursdayMainCourse.value);
            newPlan.thursday.push(thursdaySupper.value);


            newPlan.friday.push(fridayBreakfast.value);
            newPlan.friday.push(fridaySecBreakfast.value);
            newPlan.friday.push(fridaySoup.value);
            newPlan.friday.push(fridayMainCourse.value);
            newPlan.friday.push(fridaySupper.value);


            newPlan.saturday.push(saturdayBreakfast.value);
            newPlan.saturday.push(saturdaySecBreakfast.value);
            newPlan.saturday.push(saturdaySoup.value);
            newPlan.saturday.push(saturdayMainCourse.value);
            newPlan.saturday.push(saturdaySupper.value);


            newPlan.sunday.push(sundayBreakfast.value);
            newPlan.sunday.push(sundaySecBreakfast.value);
            newPlan.sunday.push(sundaySoup.value);
            newPlan.sunday.push(sundayMainCourse.value);
            newPlan.sunday.push(sundaySupper.value);

            savePlanToLocalStorage(newPlan);
            console.log("Zapisano: ", newPlan);
            window.location.href = "schedules.html";
        } else {
            alert('Nie możesz zapisać planu bez nazwy, opisu badź dnia tygodnia!');
        }
    });


    let mondayBreakfast = document.querySelector('#mondayBreakfast');
    let mondaySecBreakfast = document.querySelector('#mondaySecBreakfast');
    let mondaySoup = document.querySelector('#mondaySoup');
    let mondayMainCourse = document.querySelector('#mondayMainCourse');
    let mondaySupper = document.querySelector('#mondaySupper');

    let tuesdayBreakfast = document.querySelector('#tuesdayBreakfast');
    let tuesdaySecBreakfast = document.querySelector('#tuesdaySecBreakfast');
    let tuesdaySoup = document.querySelector('#tuesdaySoup');
    let tuesdayMainCourse = document.querySelector('#tuesdayMainCourse');
    let tuesdaySupper = document.querySelector('#tuesdaySupper');

    let wednesdayBreakfast = document.querySelector('#wednesdayBreakfast');
    let wednesdaySecBreakfast = document.querySelector('#wednesdaySecBreakfast');
    let wednesdaySoup = document.querySelector('#wednesdaySoup');
    let wednesdayMainCourse = document.querySelector('#wednesdayMainCourse');
    let wednesdaySupper = document.querySelector('#wednesdaySupper');


    let thursdayBreakfast = document.querySelector('#thursdayBreakfast');
    let thursdaySecBreakfast = document.querySelector('#thursdaySecBreakfast');
    let thursdaySoup = document.querySelector('#thursdaySoup');
    let thursdayMainCourse = document.querySelector('#thursdayMainCourse');
    let thursdaySupper = document.querySelector('#thursdaySupper');

    let fridayBreakfast = document.querySelector('#fridayBreakfast');
    let fridaySecBreakfast = document.querySelector('#fridaySecBreakfast');
    let fridaySoup = document.querySelector('#fridaySoup');
    let fridayMainCourse = document.querySelector('#fridayMainCourse');
    let fridaySupper = document.querySelector('#fridaySupper');

    let saturdayBreakfast = document.querySelector('#saturdayBreakfast');
    let saturdaySecBreakfast = document.querySelector('#saturdaySecBreakfast');
    let saturdaySoup = document.querySelector('#saturdaySoup');
    let saturdayMainCourse = document.querySelector('#saturdayMainCourse');
    let saturdaySupper = document.querySelector('#saturdaySupper');


    let sundayBreakfast = document.querySelector('#sundayBreakfast');
    let sundaySecBreakfast = document.querySelector('#sundaySecBreakfast');
    let sundaySoup = document.querySelector('#sundaySoup');
    let sundayMainCourse = document.querySelector('#sundayMainCourse');
    let sundaySupper = document.querySelector('#sundaySupper');


    var newPlan = {
        id: null,
        title: "",
        description: "",
        weekNumber: 0,
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    };


    function savePlanToLocalStorage(newObject) {
        var dataFromLocalStorage = [];
        if (localStorage.getItem("plan") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("plan"));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("plan", JSON.stringify(dataFromLocalStorage));

        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("plan", JSON.stringify(dataFromLocalStorage));
        }
        alert("Plan zapisany do localStorage");
    }

    renderSingleSelect()

    function renderSingleSelect() {
        const recipeSelect = document.querySelectorAll('.selectRecipeName');
        recipeSelect.forEach(function (element, index) {
            const allRecipes = JSON.parse(localStorage.getItem("recipes"));
            for (let i = 0; i < allRecipes.length; i++) {
                var newOption = document.createElement("option");
                newOption.innerText = allRecipes[i].title;
                element.appendChild(newOption);
            }
        })
    }

} else {
    alert('Przed stworzeniem planu musisz dodać przepisy do bazy danych!')
    window.location.href = "addrecipe.html";
}