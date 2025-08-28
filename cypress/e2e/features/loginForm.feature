Feature: Login Form

Scenario: Successful Login
    Given I am on the login page
    When I enter valid credentials
    Then I am redirected to the success page

Scenario: Invalid Username
    Given I am on the login page
    When I enter "invalidUser" as a username and "Password123" as password
    Then I should see an error message

Scenario: Invalid Password
    Given I am on the login page
    When I enter "student" as username and "WrongPassword" as password
    Then I should see an error message

Scenario: Blank Fields
    Given I am on the login page
    When I submit the form without entering credentials
    Then I should see an error message

Scenario: Logout after successful login
    Given I am on the login page
    When I enter valid credentials
    And I click the logout button
    Then I should be redirected to the login page