/// <reference types="Cypress" />
"use strict"

describe('tc',()=>{

 it('log',()=>{

    cy.visit('https://www.tatamotors.com/');
  
    cy.search('Products');
 })

})