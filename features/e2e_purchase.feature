Feature: The Internet Guinea Pig Website
Feature: Complete Order
  As a registered user
  I want to add an item to the cart and complete the order
  
  Background: 
    Given I am on the login page

  Scenario Outline: Add item to cart and complete order
    Given I am logged in with <username> and <password> credentials
    When I add an item to the cart
    And I go to the checkout page
    And I fill in the necessary personal information
    And I complete the order process
    Then I see the confirmation message <message>
    
    Examples:
      | username        | password       | message                    |
      | 'standard_user' | 'secret_sauce' | 'THANK YOU FOR YOUR ORDER' |