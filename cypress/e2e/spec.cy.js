describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#add-product-0-btn').click()
    cy.get('.sc-kGXeez').click()
    cy.get('#add-product-0-qtd').click()
  })




})