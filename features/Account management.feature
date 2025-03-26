Feature: Account management
Scenario Outline: Account creation with verification
	# fill Username with <username>, fill Password with <password>
	Given The user logs in with username "<username>" and password "<password>" 1
	# fill Verification Code with <verification_code>, click on Verify
	When The user verifies identity with verification code "<verification_code>"
	# click on Accounts
	When The user navigates to Accounts page
	# hover over Favorites list, click on Favorites list, click on New
	When The user hovers on the "Favorites list" button and clicks on "New" to create a new account
	# fill *Account Name with <account_name>, click on Save
	When The user fills the account name with "<account_name>" and saves the new account
		Examples:
		| username     | password     | verification_code | account_name |
		| dev@blinq.io | Test@0986111 | 714866            | ddfgdfgdfg   |

Scenario Outline: User login and logout
	# fill Username with <username>, fill Password with <password>
	Given The user logs in with username "<username>" and password "<password>" 2
	# click on B, click on Logout
	When The user logs out from the Shop BlinqIO page
		Examples:
		| username   | password  |
		| blinq_user | let_me_in |
