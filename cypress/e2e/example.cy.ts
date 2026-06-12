describe('ExileWork landing page', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.setItem('exile.work.locale', 'en')
      },
    })
  })

  it('loads the page and shows the brand name', () => {
    cy.contains('Exile.work').should('be.visible')
  })

  it('has a sticky navigation with links', () => {
    cy.get('header').should('be.visible')
    cy.get('header nav').should('be.visible')
    cy.get('header nav').contains('Capabilities').should('be.visible')
  })

  it('hero section has primary CTA', () => {
    cy.contains('a', 'Talk to an Engineer').should('be.visible')
  })

  it('hero section has metrics', () => {
    cy.contains('318d').should('be.visible')
    cy.contains('99.99%').should('be.visible')
  })

  it('capability strip section exists', () => {
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

  it('footer shows legal company name and CNPJ', () => {
    cy.get('footer').contains('Exile Work LTDA').should('exist')
    cy.get('footer').contains('54.468.070/0001-06').should('exist')
  })

  it('footer shows contact phone number', () => {
    cy.get('footer').contains('+55 (47) 99627-8180').should('exist')
  })

  it('footer shows studio address in Joinville', () => {
    cy.get('footer').contains('Joinville SC').should('exist')
  })

  it('footer shows legal address in São Paulo', () => {
    cy.get('footer').contains('São Paulo SP').should('exist')
  })

  it('language switcher is present and opens a dropdown', () => {
    cy.get('button[aria-haspopup="listbox"]').first().click()
    cy.contains('Português').should('be.visible')
  })

  it('switching language changes nav text', () => {
    cy.get('button[aria-haspopup="listbox"]').first().click()
    cy.contains('button', 'Português').click()
    cy.get('body').click(0, 0)
    cy.get('header nav').contains('Capacidades').should('be.visible')
  })
})
