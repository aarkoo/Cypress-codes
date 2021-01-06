/// <reference types="Cypress" />
"use strict"

describe('TC',()=>{

  it('tc',()=>{

    let name=['Java','PHP','ASP'];

    let n2=['.NET','JavaScript'];

    

       cy.visit('https://smartwebby.com/PHP/Phptips2.asp');


        name.forEach((e)=>{
            cy.get(`[value="${e}"]`).uncheck();  
        })
  
        n2.forEach((e)=>{
            cy.get(`[value="${e}"]`).check();  
        })


    //  for(let i=0;i<name.length;i++)
    //  {
    //     cy.get(`[value="${name[i]}"]`).uncheck();   
    //  }



    

    
      
      

  })

})