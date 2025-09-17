Feature: faf

  @regression
  Scenario Outline: Scenario
    Then Verify the text "<faker_var>" cannot be found in the page

    Examples:
      | faker_var               |
      | {{internet.userName()}} |