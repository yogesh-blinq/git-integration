Feature: Login flow

  Scenario Outline: Enter password
    # Click on Password textbox
    Given The user navigates to the login page and clicks on the Password textbox
    # Click on Accepted usernames are: paragraph
    When The user clicks on the paragraph Accepted usernames are:
    When abc "<user_element_id>"
    # Parameterized click on blinq_user paragraph
    When The user Parameterized clicks on the "<button_id>"
    # Click on blinq_user
    When abc2

    Examples:
      | user_element_id | button_id | button_id | user_element_id |
      | blinq_user      | let_me_in | let_me_in | blinq_user      |