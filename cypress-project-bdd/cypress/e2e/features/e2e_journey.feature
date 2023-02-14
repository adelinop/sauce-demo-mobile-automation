Feature: Basic Tests
   Feature to test basics scenarios 

  Background: 
    Given I access the system

  Scenario Outline: Place order complete
    Given I make login using <username> and <password>
    And I add a Backpack in the cart
    And I proceed to the cart
    And I proceed to checkout page
    When I fill the personal data
    And I finish the order process
    Then I can see the confirmation message <message>

    Examples: 
      | username        | password       | message                    |
      | 'standard_user' | 'secret_sauce' | 'THANK YOU FOR YOUR ORDER' |
