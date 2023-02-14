Feature: Login Functionality
   To ensure secure login for users

  Background: 
    Given I am on the login page

  Scenario Outline: Valid Login
    Given I am logged in with <username> and <password> credentials
    Then I should be logged in to the system

    Examples: 
      | username        | password       |
      | 'standard_user' | 'secret_sauce' |

  Scenario Outline: Invalid Login
    Given I am logged in with <username> and <password> credentials
    Then I should see an error message

    Examples: 
      | username       | password |
      | 'problem_user' | '123'    |
