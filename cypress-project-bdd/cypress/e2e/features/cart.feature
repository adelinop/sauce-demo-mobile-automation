Feature: Cart Tests
   Feature to test cart scenarios 

  Background: 
    Given I access the system

  Scenario Outline: Test cart item variation
    Given I make login using <username> and <password>
    When I add a Backpack in the cart
    Then I verify if the cart icon add the number of itens

    Examples: 
      | username        |  | password       |
      | 'standard_user' |  | 'secret_sauce' |
