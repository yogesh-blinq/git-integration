Feature: Shopping flow 2
Scenario Outline: User login and add to cart
	# fill Username with <username>, fill Password with <password>, click on Login
	Given The user logs in with username "<username>" and password "<password>" 1
	# click on Add to cart in the context of <urban_backpack_description>, click on Add to cart in the context of <mizu_bottle_description_1>, click on Add to cart in the context of <mizu_bottle_description_1>, click on B, click on Logout
	When The user context clicks on "Add to cart" button in the context of "<urban_backpack_description>", "<mizu_bottle_description_1>", "<mizu_bottle_description_1>" and logs out
	# verify page contains text Accepted usernames are:
	Then Verify the text "Accepted usernames are:" can be found in the page
		Examples:
		| username    | password  | urban_backpack_description         | mizu_bottle_description_1        |
		| blinq_admin | let_me_in | Urban Backpack - Compact & Durable | Mizu Bottle - Durable Hot & Cold |
