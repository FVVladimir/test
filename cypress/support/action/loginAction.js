import {clearField, clickOnButton, fillField, verifyColor, verifyErrorMessage} from "./globalAction";
import {loginPage} from "../pageObject/pageObject";
import { password, QAPortalLogin, username } from "../pageObject/loginPage";

export const fillUsernameField = (text) => {
    fillField(loginPage.username, text)
}

export const fillPasswordField = (text) => {
    fillField(loginPage.password, text)
}

export const pressLoginButton = () => {
    clickOnButton(loginPage.loginButton)
}

export const clearUsernameField = () => {
    clearField(loginPage.username)
}

export const verifyUsernameMessage = (message) => {
    verifyErrorMessage(loginPage.errorMessage, message, 0)    
    
}

export const verifyUsernameFieldColor = () =>{
    verifyColor(username, 'red');
}

export const verifyPasswordMessage = (message) => {
    verifyErrorMessage(loginPage.errorMessage, message, 1)    
}

export const verifyPasswordFieldColor = (color) => {
    verifyColor(password, color)
}

export const verifyQAPortalLoginColor = (color) => {
    verifyColor(QAPortalLogin, color)
}
export const verifyPecodeImage = () => {
    cy.get(loginPage.image)
        .should('be.visible')
        .should('have.attr', 'src', Cypress.env("pecodeImage"));
}