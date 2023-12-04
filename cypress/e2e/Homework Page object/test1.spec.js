const SmartTablePage = require('./Pages/SmartTablePage')
it(`form (Smart table page)`, () =>{
  const smartTablePage = new SmartTablePage()
  smartTablePage.visit()
  smartTablePage.fillForm('1', 'Olena', 'Nikitina',
    'adhellam', 'adhellam@gmail.com', '32')
  smartTablePage.checkFilledForm()
  smartTablePage.editFilledForm('1', '1', '1',
    '1', '1', '1')
  smartTablePage.checkFilledForm()

})
