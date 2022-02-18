/// <reference types="Cypress"/>



const el = require('../../support/elementos').ELEMENTS

describe('Tela de Login', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.elementosVisiveis()
        
      })
    it('Login com sucesso', () => {
      /* Login.feature*/
      cy.login() 
      cy.intercept('POST', 'https://timelyapp.dev.time.ly/api/login').as('PostUser')
      cy.wait('@PostUser')     
      cy.url().should('contain', '/home')   
        
    });
    it('Nenhum campo preenchido', () => {
      /* Login.feature*/
      cy.get(el.btnLogin).click()
      cy.get(el.lblWarning).should(($lis) => {
        expect($lis.eq(0)).to.contain(' Email is required')
        expect($lis.eq(1)).to.contain(' Password is required')
      })
    
      
    });
    it('Email não informado', () => {
      /* Login.feature*/
    cy.get(el.txtPass).type(Cypress.env('USER_PASSWORD'),{log:false})
    cy.get(el.btnLogin).click()
    cy.get(el.lblWarning).should('have.text', ' Email is required ')
      
    });
    it('Senha não informada', () => {
      /* Login.feature*/
      cy.get(el.txtEmail).type(Cypress.env('USER_NAME'))
      cy.get(el.btnLogin).click()   
      cy.get(el.lblWarning).should('have.text', ' Password is required ');
     
    });

    it('Email divergente', () => {
      /* Login.feature*/
      var randomEmail = "emailRandom@qw.com"      
      cy.get(el.txtEmail).type(randomEmail)
      cy.get(el.txtPass).type(Cypress.env('USER_PASSWORD'),{log:false})
      cy.get(el.btnLogin).click()
      cy.intercept('POST', 'https://timelyapp.dev.time.ly/api/login').as('PostUser')
      cy.wait('@PostUser')
      cy.get(el.lblWarningUp).should('have.text', 'Wrong email or password.')

     
    });

    it('Senha divergente', () => {
      /* Login.feature*/
      var randomPAss = "passrandom"      
      cy.get(el.txtEmail).type(Cypress.env('USER_NAME'))
      cy.get(el.txtPass).type(randomPAss,{log:false})
      cy.get(el.btnLogin).click()      
      cy.get(el.lblWarningUp).should('have.text', 'Wrong email or password.')
    });
    
  
});