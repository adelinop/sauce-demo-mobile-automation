Feature: Cart Tests
As a user
I want to be able to add items to my cart
So that I can purchase them later

  Background: 
    Given I am on the login page

  Scenario Outline: Add item to cart
    Given I am logged in with <username> and <password> credentials
    When I add an item to the cart
    Then the cart icon displays the number of items

    Examples: 
      | username        | password       |
      | 'standard_user' | 'secret_sauce' |
