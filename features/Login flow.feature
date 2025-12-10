Feature: Login flow

  Scenario Outline: Enter password
    # Click on Password textbox
    Given The user navigates to the login page and clicks on the Password textbox
    # Click on Accepted usernames are: paragraph
    When The user clicks on the paragraph Accepted usernames are:
    # Parameterized click on blinq_user
    When abc "<user_element_id>"
    # Parameterized click on let_me_in
    When The user Parameterized clicks on the "<button_id>"

    Examples:
      | user_element_id | button_id |
      | blinq_user      | let_me_in |