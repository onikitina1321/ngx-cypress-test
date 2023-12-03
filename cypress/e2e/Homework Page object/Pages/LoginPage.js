class LoginPage{
  _url = `auth/login`
  _emailSelector = `[id="input-email"]`
  _passwordSelector =`[id="input-password"]`
  _rememberMeSelector = `span.custom-checkbox`
  _logInSelector = `nb-card-body  nb-auth-block  nb-login  form  button`
  _logoSelector = 'a.logo'
 _newUrl = `/pages`


  visit(){
    cy.visit(this._url)
  }

  fillForm(email, password){
    cy.get(this._emailSelector).type(email)
    cy.get(this._passwordSelector).type(password)

    cy.get(this._rememberMeSelector).click()
    cy.get(this._logInSelector).click()

  }

  checkLogin() {
    cy.url().should('include', this._newUrl);
    cy.get(this._logoSelector).should(`have.text`, "ngx-admin")

  }
}
module.exports = LoginPage;
