function addNewTerm() {
    const container = document.getElementById("terms__container");
    container.insertAdjacentHTML('beforeend', 
    '<div class="terms__item">' +
        '<form action="" class="terms__form">' +
            '<input type="text" class="terms__input terms__name" placeholder="Term">' +
            '<input type="text" class="terms__input terms__definition" placeholder="Definition">' +
        '</form>' +
    '</div>'
    );
}

function createModule() {
    const termsCount = document.querySelectorAll(".terms__item").length;
    const moduleName = document.getElementById("module_name").value;

    const module = new Module(moduleName);

    const termsName = document.querySelectorAll(".terms__name");
    const termsDefinition = document.querySelectorAll(".terms__definition");

    for (let i = 0; i < termsCount; i++){
        module.addTerm(termsName[i].value, termsDefinition[i].value);
    }

    const modulesJsonString = localStorage.getItem('modules');
    const modulesFromStorage = JSON.parse(modulesJsonString);
    modulesFromStorage.push(module);

    const jsonString = JSON.stringify(modulesFromStorage);
    localStorage.setItem('modules', jsonString);

    window.location.href = "../index.html";
}