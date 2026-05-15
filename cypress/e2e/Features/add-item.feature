Feature: Demoblaze Online Store

Scenario: Add Cell Phone To Cart
    Given I am on the Demoblaze product page
    When I select a cell phone
    And add it to the cart
    Then I should see the cell phone in the cart

Scenario: Add laptop To Cart
    Given I am on the Demoblaze product page
    When I select a laptop
    And add it to the cart
    Then I should see the laptop in the cart

Scenario: Add Monitor To Cart
    Given I am on the Demoblaze product page
    When I select a monitor
    And add it to the cart
    Then I should see the monitor in the cart