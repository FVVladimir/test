Feature: Test Login page

Background:   
   Given user on login page
# -----------------------------------------------------------------------------------------------------------#
Scenario: verify that all element on page visible
    Then all element on page are visible
# -----------------------------------------------------------------------------------------------------------#
Scenario: verify that user can`t login without username and password
    When user not typed username and password
    And click button login
    Then system should give error message without username and password
# -------------------------------------------------------------------------------------------------------------#
Scenario: verify that user can`t login with invalid data
    When user typed invalid password and login
    And click button login
    Then system should give error message about invalid data
# ------------------------------------------------------------------------------------------------------------#
Scenario: verify that user not filled field username and press button log in
    When user not fill field username
    And click button login
    Then system should give error message not filled field username
# --------------------------------------------------------------------------------------------------------------#
Scenario: verify that user not filled field password and press button log in
    When user not fill field password
    And click button login
    Then system should give error message not filled field password   