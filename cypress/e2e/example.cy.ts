describe('ExileWork landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the page and shows the brand name', () => {
    cy.contains('Exile.work').should('be.visible')
  })

  it('has a sticky navigation with links', () => {
    cy.get('header').should('be.visible')
    cy.get('header nav').contains('Capabilities').should('be.visible')
  })

  it('hero section has primary CTA', () => {
    cy.contains('a', 'Talk to an Engineer').should('be.visible')
  })

  it('hero section has metrics', () => {
    cy.contains('318d').should('be.visible')
    cy.contains('99.99%').should('be.visible')
  })

  it('scrolls to capabilities section', () => {
    cy.get('#capabilities').should('exist')
  })

  it('capability strip shows what we build', () => {
    cy.contains('Persistent Multiplayer Worlds').should('exist')
    cy.contains('Scalable SaaS Platforms').should('exist')
  })

  it('engineering showcase section exists', () => {
    cy.get('#engineering').should('exist')
    cy.get('#engineering').contains('Product Engineering').should('exist')
  })

  it('contact section has email link', () => {
    cy.get('#contact').should('exist')
    cy.get('a[href="mailto:hello@exile.work"]').should('exist')
  })

  it('footer has copyright', () => {
    cy.get('footer').contains('Exile.work').should('be.visible')
  })

  it('language switcher is present and opens a dropdown', () => {
    cy.get('button[aria-haspopup="listbox"]').first().click()
    cy.contains('Português').should('be.visible')
  })

  it('switching language changes nav text', () => {
    cy.get('button[aria-haspopup="listbox"]').first().click()
    cy.contains('button', 'Português').click()
    cy.get('header nav').contains('Capacidades').should('be.visible')
  })
})
