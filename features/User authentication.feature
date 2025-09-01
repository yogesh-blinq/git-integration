Feature: User authentication

  @a
  Scenario: Login with credentials
    # Click on Log InUsername *Password *Login
    Given The user clicks on the Login button on the login page

  Scenario Outline: User Registration with Valid Data
    Given The user navigates to the registration page
    When The user enters "<email>" and "<password>" into the registration form
    And The user submits the registration form
    Then The user should see a confirmation of account creation

    Examples:
      | email               | password       |
      | newuser@example.com | SecurePass123! |

  Scenario Outline: Password Reset Request
    Given The user navigates to the login page
    When The user clicks on "Forgot Password"
    And The user enters "<email>" into the email field
    Then The user should receive a password reset email

    Examples:
      | email                      |
      | registereduser@example.com |

  @regression
  Scenario Outline: Untitled

  @regression
  Scenario Outline:

  @regression
  Scenario Outline: g5