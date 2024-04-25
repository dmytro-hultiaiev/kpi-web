class User {
  constructor(login, email, password, registration_date) {
    this._login = login;
    this._email = email;
    this._password = password;
    this.registration_date = registration_date;
  }

  get login() {
    return this._login;
  }

  set login(newLogin) {
    this._login = newLogin;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get password() {
    return this._password;
  }

  set password(newPassword) {
    this._password = newPassword;
  }
}

class Module {
  constructor(moduleName) {
      this.moduleName = moduleName;
      this.terms = [];
  }

  addTerm(term, definition) {
      this.terms.push({ term, definition });
  }
}