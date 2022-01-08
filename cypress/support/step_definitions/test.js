import {    
    fillPasswordField,
    fillUsernameField,
    pressLoginButton,
    verifyPasswordMessage,
    verifyUsernameMessage,
    verifyQAPortalLoginColor,
    verifyUsernameFieldColor,
    verifyPasswordFieldColor
} from '../action/loginAction.js';
import { verifyElementVisibility} from '../action/globalAction.js';
import  {image, QAPortalLogin, username,password,loginButton} from '../pageObject/loginPage'

Given('user on login page', () => {
    cy.visit('/') 
});
// -----------------------------------------------------------------------------------------------------------//
Then('all element on page are visible', () => {
    verifyElementVisibility(image)    
    verifyElementVisibility(QAPortalLogin)
    verifyQAPortalLoginColor()
    verifyElementVisibility(username)
    verifyElementVisibility(password)
    verifyElementVisibility(loginButton)
    
});
// -----------------------------------------------------------------------------------------------------------//
When('user not typed username and password', () => {
    cy.log('any data enter')
})

And('click button login', () => {
    pressLoginButton()
})

Then('system should give error message without username and password', () => {
    verifyUsernameMessage('Please enter username.');
    verifyUsernameFieldColor()
    verifyPasswordMessage('Please enter your password.')
    verifyPasswordFieldColor()
})
// -----------------------------------------------------------------------------------------------------------//
When('user typed invalid password and login', () => {
    fillUsernameField('username')
    fillPasswordField('password')
})

And('click button login', () => {
    pressLoginButton()
});

Then('system should give error message with invalid data', () => {
    verifyUsernameMessage('No account found with that username.')
    cy.screenshot()
});
// -------------------------------------------------------------------------------------------------------------//
When('user not fill field username', () => {
    fillPasswordField('password');
});

And('click button login', () => {
    pressLoginButton()
});

Then('system should give error message not filled field username', () => {
    verifyUsernameMessage('Please enter username.')
    cy.screenshot()
});

When('user not fill field password', () => {
    fillUsernameField('username');
})
And('click button login', () => {
    pressLoginButton();
});

Then('system should give error message not filled field password', () => {
    verifyPasswordMessage('Please enter your password.');
    cy.screenshot();
});