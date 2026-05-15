Feature: HTML Form Submission

Scenario: Fill and submit the basic form
  Given I open the basic form page
  When I fill in the form fields
  And I check the first checkbox
  And I select the "Selection Item 2" from the dropdown
  And I submit the form
  Then I should see the form submission confirmation

Scenario Outline: Submit form with multiple user credentials and dropdown choices
  Given I open the basic form page
  When I fill in username "<username>" and password "<password>"
  And I select the "<dropdown>" from the dropdown
  And I submit the form
  Then I should see the form submission confirmation

  Examples:
    | username | password   | dropdown            |
    | user1    | pass123    | Selection Item 1    |
    | testuser | secret456  | Selection Item 3    |
    | qauser   | qapassword | Selection Item 4    |
