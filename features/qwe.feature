Feature: qwe

  @regression
  Scenario Outline: Scenario Outline: faker
    Given login with "<username> <username_faker>" and "p"
    Then verify "Invalid" can be found in the page

    Examples:
      | username     | username_faker         | password               | item                               |
      | blinq_user   | {{person.firstName()}} | let_me_in              | Urban Backpack - Compact & Durable |
      | \\"yogesh\\" | {{person.firstName()}} | \\"'yogesh' 'singh'\\" | Urban Backpack - Compact & Durable |