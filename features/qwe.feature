Feature: qwe

  @regression
  Scenario Outline: Scenario Outline: faker
    Given login with "{{internet.userName()}}" and "p"

    Examples:
      | username     | username_faker         | password               | item                               |
      | blinq_user   | {{person.firstName()}} | let_me_in              | Urban Backpack - Compact & Durable |
      | \\"yogesh\\" | {{person.firstName()}} | \\"'yogesh' 'singh'\\" | Urban Backpack - Compact & Durable |