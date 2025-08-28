Feature: HTML Form Submission

  Scenario: Fill and submit the basic form
    Given I open the basic form page
    When I fill in the form fields
    And I check the first checkbox
    And I select Drop Down Item 2 from the dropdown
    And I submit the form
    Then I should see the form submission confirmation
