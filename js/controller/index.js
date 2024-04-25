function updateModules() {
    const modulesJsonString = localStorage.getItem('modules');
    const modules = JSON.parse(modulesJsonString);
    const folderContent = document.getElementById("folder__content");

    for(let i = 0; i < modules.length; i++){
        const module = modules[i];
        folderContent.insertAdjacentHTML('beforeend', 
        `<div class="module">
            <a href="pages/module.html" onclick = "getCurrentModule(event)">
                <div class="module__header">
                    <p>${module.moduleName}</p>
                </div>
                <div class="module__desc">
                    <ul class="module__desc__items">
                        <li class="module__desc__item">${module.terms.length} terms</li>
                    </ul>
                </div>
            </a>
        </div>`
        );
    }
}

function getCurrentModule(event){
    const parentAnchor = event.target.closest('a');
    const moduleHeader = parentAnchor.querySelector('.module__header');
    const paragraphValue = moduleHeader.querySelector('p').textContent;
    
    const modulesJsonString = localStorage.getItem('modules');
    const modules = JSON.parse(modulesJsonString);

    for(let i = 0; i < modules.length; i++){
        const module = modules[i];

        if(module.moduleName == paragraphValue){
            localStorage.setItem('currentModule', i);
        }
    }
}

function moduleHeaderView() {
    const mainPageContainer = document.getElementById("main__page__container");
    const folder = document.getElementById("folder");

    const savedIsUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    if(savedIsUserLoggedIn == 'true'){
        mainPageContainer.style.display = 'none';
        folder.style.display = 'block';
    } else {
        folder.style.display = 'none';
        mainPageContainer.style.display = 'block';
    }
}

moduleHeaderView();
updateModules();
