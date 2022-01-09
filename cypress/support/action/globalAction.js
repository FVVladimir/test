export const fillField = (elem, text) => {
    cy.get(elem).type(text)
}

export const verifyErrorMessage = (elem, message, eq) => {
    cy.get(elem).eq(eq)
        .should('contain.text', message)
        .and('have.css', 'color', Cypress.env("red"))
}

export const verifyElementVisibility = (elem) => {
    cy.get(elem).should('be.visible')
}

export const clickOnButton = (elem) => {
    cy.get(elem).click()
}

export const clearField = (elem) => {
    cy.get(elem).clear()
}

export const verifyColor = (elem,color) => {
    cy.get(elem).should('have.css', 'border-color', Cypress.env(color));
}

export const verifyUrl = url => {
    cy.url().should('include', url);
}