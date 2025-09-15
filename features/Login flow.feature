Feature: Login flow

  @fa
  Scenario Outline: Login with username and password
    # Click on Username, Click on Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in, Click on Username, fill Username with <username>, fill Password with <password>
    Given The user logs in with username "<username>" and password "<password>"

    Examples:
      | username | password        |
      | {{fafa}} | {{env.baseUrl}} |