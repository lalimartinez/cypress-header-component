describe('Global Header', () => {
  beforeEach(() => {
    cy.visit('https://www.webstacks.com/')
  })

  context('Checks header items on different viewports', () => {
    it('checks header items on a desktop view', () => {
      cy.getByAriaLabel('Hamburger Menu').should('exist').and('not.be.visible')

      cy.getByTitle('Official Webstacks Logo').should('exist')

      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(2) > .Link__StyledLink-sc-1tyfjkq-0')
        .should('exist').contains('Why Webstacks')

      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(3) > .HCFSY')
        .should('exist').contains('Solutions')

      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(4) > .Link__StyledLink-sc-1tyfjkq-0')
        .should('exist').contains('Pricing')

      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(5) > .HCFSY')
        .should('exist').contains('Company')

      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > .gjrstd > .Link__StyledLink-sc-1tyfjkq-0')
        .should('exist').contains('Client Stories')

      cy.getByInternalName('Start a website project (Popup CTA)')
        .should('exist').contains('Start a website project')
    })

    it('checks header items on a tablet view', () => {
      cy.viewport(991, 800)

      cy.getByAriaLabel('Hamburger Menu').should('be.visible')

      cy.getByTitle('Official Webstacks Logo').should('be.visible')

      cy.getByInternalName('Start a website project (Popup CTA)')
        .should('be.visible').contains('Start a website project')

      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(2) > .Link__StyledLink-sc-1tyfjkq-0')
        .should('not.be.visible').contains('Why Webstacks')
    })

    it('checks header items on a mobile view', () => {
      cy.viewport(375, 700)
      cy.getByAriaLabel('Hamburger Menu').should('be.visible')
      cy.getByTitle('Official Webstacks Logo').should('be.visible')
      cy.getByInternalName('Start a website project (Popup CTA)').should('not.be.visible')
    })
  })

  context('Image data', () => {
    it('checks header logo has src and alt attributes', () => {
      cy.getByTitle('Official Webstacks Logo')
        .should('have.attr', 'src')
      cy.getByTitle('Official Webstacks Logo')
        .should('have.attr', 'alt', 'Official Webstacks Logo')
    })
  })

  context('Clicks header items', () => {
    it('clicks webstacks logo', () => {
      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .pMNMM > .Image__StyledImage-sc-1v8kks6-0').click()
      cy.location('pathname').should('eq', '/')
    })

    it('clicks why webstacks link', () => {
      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(2) > .Link__StyledLink-sc-1tyfjkq-0').click()
      cy.location('pathname').should('eq', '/why-webstacks')
    })

    it('clicks pricing link', () => {
      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(4) > .Link__StyledLink-sc-1tyfjkq-0').click()
      cy.location('pathname').should('eq', '/pricing')
    })

    it('clicks client stories link', () => {
      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > .gjrstd > .Link__StyledLink-sc-1tyfjkq-0').click()
      cy.location('pathname').should('eq', '/client-stories')
    })

    it('clicks start a website button', () => {
      cy.getByInternalName('Start a website project (Popup CTA)').eq(3).click()
    })
  })

  context('Hovers over header items', () => {
    it('hovers over solutions', () => {
      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(3) > .HCFSY')
        .trigger('mouseover')
      cy.get('.khfnNI').should('exist')
    })

    it('hovers over company', () => {
      cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(5) > .HCFSY')
        .trigger('mouseover')
      cy.get('.khfnNI').should('exist')
    })
  })

  it('clicks web development under solutions', () => {
    cy.get('.cLujBd > .iaAQQW > .dmqCoo > .gtsDJF > .Header___StyledFlex-sc-12stfhq-3 > :nth-child(3) > .HCFSY')
      .trigger('mouseover')

    cy.get('.khfnNI > .MenuItem___StyledFlex-sc-1qhook6-2 > .eaQKQY > .bbAyXF > :nth-child(2) > .Link__StyledLink-sc-1tyfjkq-0').click()
    cy.location('pathname').should('eq', '/solutions/web-development')
  })

  it('checks that navigation bar is sticky', () => {
    cy.get('nav').then($nav => {
      const top = $nav[0].getBoundingClientRect().top

      cy.scrollTo('bottom')

      cy.get('nav').then($nav => {
        expect($nav[0].getBoundingClientRect().top).to.equal(top)
      })
    })
  })

  it('clicks the hamburger menu on a tablet', () => {
    cy.viewport(991, 800)
    cy.getByAriaLabel('Hamburger Menu').eq(1).click()
    cy.get('#b25b7233-5bcf-53f1-acea-1d1c828e0223 > nav > div > div > ul')
      .should('be.visible')
  })
})