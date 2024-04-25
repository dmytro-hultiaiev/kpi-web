function updateHeader() {
    const profileView = document.querySelectorAll('.header__profile');
    const authorization = document.querySelectorAll('.authorization');

    const savedIsUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    if(savedIsUserLoggedIn == 'true'){
        for (let e of profileView) {
            e.style.display = 'block';
        }
        for (let e of authorization) {
            e.style.display = 'none';
        }
    } else {
        for (let e of profileView) {
            e.style.display = 'none';
        }
        for (let e of authorization) {
            e.style.display = 'block';
        }
    }
}

updateHeader();
