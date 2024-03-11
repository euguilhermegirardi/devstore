describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to navigate to the product page and add a product to cart', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')
    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products in the cart', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')
    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })
})
