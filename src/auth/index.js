class Auth {
  constructor() {
    this.isAuthenticated = false;
  }

  login(callBack) {
    this.isAuthenticated = true;

    callBack();
  }

  logout(callBack) {
    this.isAuthenticated = false;

    callBack();
  }

  showAuthenticated() {
    return this.isAuthenticated;
  }
}

export default new Auth();
