function showModule(){
    const modulesJsonString = localStorage.getItem('modules');
    const modules = JSON.parse(modulesJsonString);
    const moduleNum = localStorage.getItem('currentModule');
    const module = modules[moduleNum];

    const moduleName = document.getElementById("module__name");
    const termsCount = document.getElementById("module__statistics__item");
    const termsContainer = document.getElementById("terms__container");

    moduleName.textContent = module.moduleName;
    termsCount.textContent = `${module.terms.length} terms`;

    for(let i = 0; i < module.terms.length; i++){
        const termObj = module.terms[i];
        termsContainer.insertAdjacentHTML('beforeend', 
        `<div class="terms__item">
            <div class="terms__item__header">${termObj.term}</div>
            <div class="terms__item__desc">${termObj.definition}</div>
        </div>`
        );
    }
}

function deleteModule(){
    const modulesJsonString = localStorage.getItem('modules');
    const modules = JSON.parse(modulesJsonString);
    const moduleNum = localStorage.getItem('currentModule')

    modules.splice(moduleNum, 1);

    const jsonString = JSON.stringify(modules);
    localStorage.setItem('modules', jsonString);

    window.location.href = "../index.html";
}

showModule();