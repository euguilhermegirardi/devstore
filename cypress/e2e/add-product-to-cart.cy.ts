describe('add product to cart', () => {
  it('should be able to navigate to the product page and add a product to cart', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href^="/product"').first().click()
    cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')
    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products in the cart', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href^="/product"').first().click()
    cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')
    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })
})

describe('search product', () => {
  it('should be able to search for a product and add it to the cart', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=q]').type('moletom').parent('form').submit()
    cy.get('a[href^="/product"').first().click()
    cy.location('pathname').should('include', '/product')
    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })
})
