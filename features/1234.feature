Feature: 1234

  @regression
  Scenario Outline: faker
    Given login with "<username>" and "let_me_in"

    Examples:
      | username   | username_faker         | password  | item                               |
      | blinq_user | {{person.firstName()}} | let_me_in | Urban Backpack - Compact & Durable |

  @regression
  Scenario Outline: faker (1)
    Given login with "blinq_user" and "p"
    Given login with "<username>" and "p"
    Given login with "{{internet.userName()}}" and "p"
    Given login with "{{testUser}}" and "p"
    Given login with "<faker>" and "p"
    Given login with "<testData>" and "p"
    Then verify "Invalid" can be found in the page

    Examples:
      | username     | faker                  | testData               | item                               |
      | blinq_user   | {{person.firstName()}} | {{testUser}}           | Urban Backpack - Compact & Durable |
      | \\"yogesh\\" | {{person.firstName()}} | \\"'yogesh' 'singh'\\" | Urban Backpack - Compact & Durable |