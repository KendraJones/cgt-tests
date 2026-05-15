Feature: JSONPlaceholder API - Users

  Scenario: Get list of Users
    Given the API base URL is set
    When I send a GET request to the users endpoint
    Then the response status should be 200
    And the response should contain a list of users