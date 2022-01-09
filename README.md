Test Login form Pecods website.
The test is done with cypress and cypress-cucumder-preprocessor,
which able to create a '.feature' file and execute a test according to it.
In the feture file have scenario.
It is task:
Feature: Test Login page

It is default condition:
Background:   
   Given user on login page
# -----------------------------------------------------------------------------------------------------------#
In this scenario verify thet all elements on page is visible
Scenario: verify that all element on page visible
    Then all element on page are visible
# -----------------------------------------------------------------------------------------------------------#
In this scenario check that the user can't login without fill field usernama and password
Scenario: verify that user can`t login without username and password
    When user not typed username and password
    And click button login
    Then system should give error message without username and password
# -------------------------------------------------------------------------------------------------------------#
In this scenario check that the user can't login with invalid data
Scenario: verify that user can`t login with invalid data
    When user typed invalid password and login
    And click button login
    Then system should give error message about invalid data
# ------------------------------------------------------------------------------------------------------------#
In this scenario check that the user can't login without fill username field
Scenario: verify that user not filled field username and press button log in
    When user not fill field username
    And click button login
    Then system should give error message not filled field username
# --------------------------------------------------------------------------------------------------------------#
In this scenario check that the user can't login without fill password field
Scenario: verify that user not filled field password and press button log in
    When user not fill field password
    And click button login
    Then system should give error message not filled field password
    
    After passing these scripts all tests were successful, all screenshots and videos are exist inside project by paths:
-cypress/screenshots;
-cypress/videos;


The color data was taken from the environment file and took from there:
{
  "pecodeImage": "https://pecode-software.web.app/static/media/icon-logo.f8576d05.svg",  
  "red": "rgb(169, 68, 66)",
  "green": "rgb(22, 115, 60)"
}
