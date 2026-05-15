Feature: Logging in and out successfully

Scenario: Successfull Login
    Given I am on the Practice Test Automation login page
    When I enter valid PTA credentials
    Then I am redirected to the dashboard

Scenario: Successful Logout
    Given I am on the Practice Test Automation login page
    When I enter valid PTA credentials
    And I am redirected to the dashboard
    Then I will be able to click the Log out button