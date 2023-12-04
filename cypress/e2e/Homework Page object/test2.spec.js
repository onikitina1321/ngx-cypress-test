const LoginPage = require('./Pages/LoginPage')
it(`Login to the app`, () => {
  const loginPage = new LoginPage()
  loginPage.visit()
  loginPage.fillForm('adhellam@gmail.com', '1234')
  loginPage.checkLogin()
})
