function signOut() {
    localStorage.setItem('isUserLoggedIn', false);
    window.location.href = "../index.html"
}

function showInfoInProfile() {
    const userJsonString = localStorage.getItem('user');
    const user = JSON.parse(userJsonString);
    const modulesJsonString = localStorage.getItem('modules');
    const modules = JSON.parse(modulesJsonString);

    const userView = document.getElementById("username");
    const emailView = document.getElementById("email");
    const numberModules = document.getElementById("numberModules");
    const date = document.getElementById("date");

    if(userView != null && emailView != null && numberModules != null){
        userView.textContent = user._login;
        emailView.textContent = user._email;
        numberModules.textContent = modules.length;
        date.textContent = user.registration_date.split('T')[0];
    }
}

showInfoInProfile();