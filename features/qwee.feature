Feature: qwee
login

Scenario Outline: Successful Login
    Given login with "<username>" and "<password>"
    When click on the login button
    Then verify "Welcome" can be found in the page

    Examples:
      | username           | password    |
      | user1@example.com | Pass123456  |