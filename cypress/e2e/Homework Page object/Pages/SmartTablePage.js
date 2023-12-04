class SmartTablePage{
  _url = `pages/tables/smart-table`
  _plusSelector = `i.nb-plus`
  _idSelector =`form-control ng-untouched ng-pristine ng-valid,[ng-reflect-name="id"]`
  _firstNameSelector = `form-control ng-untouched ng-pristine ng-valid,[ng-reflect-name="firstName"]`
  _lastNameSelector = `form-control ng-untouched ng-pristine ng-valid,[ng-reflect-name="lastName"]`
  _userNameSelector = `form-control ng-untouched ng-pristine ng-valid,[ng-reflect-name="username"]`
  _emailSelector = `form-control ng-untouched ng-pristine ng-valid,[ng-reflect-name="email"]`
  _ageSelector = `form-control ng-untouched ng-pristine ng-valid,[ng-reflect-name="age"]`
  _creteUser = `i.nb-checkmark`

  _firstRowEdit = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(1) i.nb-edit`
  _firstRowId = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(2)`
  _firstRowFirstName = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(3)`
  _firstRowLastName = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(4)`
  _firstRowUserName = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(5)`
  _firstRowEmail = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(6)`
  _firstRowAge = `ng2-smart-table  table  tbody  tr:nth-child(1) td:nth-child(7)`

  filledFormData = {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    age: '',
  }
visit(){
    cy.visit(this._url)
}

fillForm(id, firstName, lastName, userName, email, age){
  cy.get(this._plusSelector).click()

  cy.get(this._idSelector).type(id)
  cy.get(this._firstNameSelector).type(firstName)
  cy.get(this._lastNameSelector).type(lastName)
  cy.get(this._userNameSelector).type(userName)
  cy.get(this._emailSelector).type(email)
  cy.get(this._ageSelector).type(age)

  cy.get(this._creteUser).click()

  this.filledFormData = {
    id,
    firstName,
    lastName,
    userName,
    email,
    age,
  }
}
checkFilledForm(){
    cy.get(this._firstRowId).invoke('text').should('be.equal', this.filledFormData.id);
    cy.get(this._firstRowFirstName).invoke('text').should('be.equal', this.filledFormData.firstName);
    cy.get(this._firstRowLastName).invoke('text').should('be.equal', this.filledFormData.lastName);
    cy.get(this._firstRowUserName).invoke('text').should('be.equal', this.filledFormData.userName);
    cy.get(this._firstRowEmail).invoke('text').should('be.equal', this.filledFormData.email);
    cy.get(this._firstRowAge).invoke('text').should('be.equal', this.filledFormData.age);
  }
editFilledForm(id, firstName, lastName, userName, email, age){
  cy.get(this._firstRowEdit).click()

  cy.get(this._idSelector).type(id)
  cy.get(this._firstNameSelector).type(firstName)
  cy.get(this._lastNameSelector).type(lastName)
  cy.get(this._userNameSelector).type(userName)
  cy.get(this._emailSelector).type(email)
  cy.get(this._ageSelector).type(age)

  cy.get(this._creteUser).click()

  this.filledFormData.id +=id
  this.filledFormData.firstName +=firstName
  this.filledFormData.lastName +=lastName
  this.filledFormData.userName +=userName
  this.filledFormData.email +=email
  this.filledFormData.age +=age

}
}
module.exports = SmartTablePage;

