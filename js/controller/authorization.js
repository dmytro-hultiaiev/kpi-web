function register() {
    const login = document.getElementById('regLogin').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const newUser = new User(login, email, password, new Date());
    const jsonString = JSON.stringify(newUser);
    localStorage.setItem('user', jsonString);

    const modules = [];
    const jsonModulesString = JSON.stringify(modules);
    localStorage.setItem('modules', jsonModulesString);

    window.location.href = "../index.html"
}

function login() {
    const error = document.getElementById('error__text');
    error.style.display = 'none'

    const userJsonString = localStorage.getItem('user');
    const user = JSON.parse(userJsonString);

    const login = document.getElementById('logLogin').value;
    const password = document.getElementById('logPass').value;


    if ((login == user._login || login == user._email) && password == user._password) {
        localStorage.setItem('isUserLoggedIn', true);
        window.location.href = "../index.html"
    } else {
        error.style.display = 'block';
        return;
    }
}