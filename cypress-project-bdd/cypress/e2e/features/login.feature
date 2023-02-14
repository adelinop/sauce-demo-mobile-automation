Feature: Login tests
   Feature to test login scenarios  

  Background: 
    Given I access the system

  Scenario Outline: Test valid login
    Given I make login using <username> and <password>
    Then I can access the system

    Examples: 
      | username        |  | password       |
      | 'standard_user' |  | 'secret_sauce' |

  Scenario Outline: Test Invalid login
    Given I make login using <username> and <password>
    Then I can see the error message

    Examples: 
      | username       |  | password |
      | 'problem_user' |  | '123'    |
