Feature: 1234

  @regression
  Scenario Outline: faker
    Given login with "<username>" and "let_me_in"

    Examples:
      | username   | username_faker         | password  | item                               |
      | blinq_user | {{person.firstName()}} | let_me_in | Urban Backpack - Compact & Durable |

  @regression
  Scenario Outline: