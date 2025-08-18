Feature: feature2

  Scenario Outline: Login to shop blinq
    # Click on Log In, Click on Log InUsername *Password *Login in the context of <login_form_label>, Click on Login
    Given The user interacts with the login form labeled as "<login_form_label>"

    Examples:
      | login_form_label                |
      | Log InUsername *Password *Login |
