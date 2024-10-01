describe('Prueba 01102024', () => {
  it('Caso 01 - Comprar Edge 40 ', () => {
    cy.visit('https://tienda.personal.com.ar/')
    cy.get('.emsye88r').type('Edge 40')
    cy.get('.emsye88t').click
    cy.get('._1qzmwzwaw > :nth-child(6)')
    cy.get('[href="/celulares/motorola/motorola-edge-40-neo/f"]').click
    cy.get('[href="/celulares/motorola/motorola-edge-40-neo/f"]').should('contains',' Incluye accesorios')
    cy.get('[href="/celulares/motorola/motorola-edge-40-neo/f"]').should('contains',' 6 cuotas sin interes')
    cy.get('.l0q4lv1v').click
    cy.get('.ifxy2k0')
  })
})