Feature: Dropdown Selection

Scenario: Select Option 1
    Given I open the dropdown page
    When I select "Option 1" from the dropdown
    Then the dropdown value should be "1"

Scenario: Select Option 2
    Given I open the dropdown page
    When I select "Option 2" from the dropdown
    Then the dropdown value should be "2"