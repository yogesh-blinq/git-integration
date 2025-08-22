Feature: feature1

  @a
  Scenario Outline: Login with username and password yes
    # Click on Username *Password *Login, Click on Username, Click on Log InUsername *Password *Login in the context of <login_form_section_text>
    Given The user clicks on Log InUsername *Password *Login in the context of "<login_form_section_text>"

    Examples:
      | login_form_section_text         |
      | Log InUsername *Password *Login |

  Scenario: Multiple logins attempt
    # Click on Log In, Click on Log In, Click on Log In
    Given The user clicks multiple times on Log In on the Shop Blinq Login page