Feature: Successful Funds Transfer

Scenario: Successfully fund a transfer
    Given I am on the Transfer Funds screen
    When I enter valid information and submit the transfer
    Then I should be redirected to a confirmation screen