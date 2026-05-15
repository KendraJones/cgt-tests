Feature: Session Timeout

  Scenario: User is logged out after inactivity
    Given I am logged into QBank with valid credentials
    When I remain inactive for 15 minutes
    Then I should be redirected to the QBank login page