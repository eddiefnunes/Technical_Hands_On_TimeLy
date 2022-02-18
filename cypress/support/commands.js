const el = require('./elementos').ELEMENTS

Cypress.Commands.add('login', () => {

    const username  = Cypress.env('USER_NAME')
    const password = Cypress.env('USER_PASSWORD')  
    
      cy.visit('/login')
      cy.get(el.txtEmail).type(username)
      cy.get(el.txtPass).type(password,{ log: false })
      cy.get(el.btnLogin).click()
     
    
  })


  Cypress.Commands.add('elementosVisiveis', () => {

    cy.get(el.cardHead).should('be.visible')
    cy.get(el.checkBox).should('be.visible')   
    cy.get(el.cardFooter).should('be.visible')
    cy.get(el.linkForgotPass).should('be.visible')
    cy.get(el.txtEmail).should('be.visible')
    cy.get(el.txtPass).should('be.visible')
    cy.get(el.btnLogin).should('be.visible')
    
  })

  