Feature: Login Form Validation

Scenario: Blank Username
    Given I open the login page
    When I enter "" as username and "Password123" as password
    Then I should see an Error Message

Scenario: Blank Password123
    Given I open the login page
    When I enter "student" as username and "" as password
    Then I should see an Error Message

Scenario: Password too short
    Given I open the login page
    When I enter "student" as username and "123" as password
    Then I should see an Error Message

Scenario: Username with only spaces
    Given I open the login page
    When I enter "    " as username and "Password123" as password
    Then I should see an Error Message