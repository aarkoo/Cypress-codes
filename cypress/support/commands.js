// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add("login",(uname,pass)=>{
    cy.get('#username').type(uname);
    cy.get('#password').type(pass);
    cy.get('.col-sm-offset-3 > .btn').click();



})

Cypress.Commands.add('search',product=>{

    cy.get('.has-children>.productCursor').contains(product).click({force: true});

})


//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
