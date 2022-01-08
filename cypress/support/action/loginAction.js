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

export const verifyPasswordFieldColor = () => {
    verifyColor(password, 'red')
}

export const verifyQAPortalLoginColor = () => {
    verifyColor(QAPortalLogin, 'green')
}