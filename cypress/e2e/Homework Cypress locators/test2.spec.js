describe('Modal dialog', () =>{

  it('should show valid buttons and text', () => {
    cy.visit("/pages/modal-overlays/dialog")
    const containerSelector = 'div:nth-child(5)  nb-card  nb-card-body'
    const modalSelector = 'nb-dialog-container'

    cy.get(`${containerSelector} button`).should(`have.text`, "Enter Name")
    cy.get(`${containerSelector}`).contains('Enter Name').click()

    cy.get(`${modalSelector}`).should(`be.visible`)

    cy.get(`${modalSelector} nb-card-header`).should(`have.text`, "Enter your name")

    cy.get(`${modalSelector} nb-card-body input`).should(`exist`)
    cy.get(`${modalSelector} nb-card-body input`).should(`have.attr`,`placeholder`, "Name")

    cy.get(`${modalSelector} nb-card-footer button.cancel`).should(`exist`)
    cy.get(`${modalSelector} nb-card-footer button.cancel`).should(`have.text`, "Cancel")

    cy.get(`${modalSelector} nb-card-footer button[status="success"]`).should(`exist`)
    cy.get(`${modalSelector} nb-card-footer button[status="success"]`).should(`have.text`, "Submit")
  })
})
