Feature: Shop checkout
Scenario Outline: User checkout process
	# fill Username with <username>, fill Password with <password>
	Given The user logs in with username "<username>" and password "<password>"
	# click on Add to cart in the context of <product_name>, click on Go to cart
	When The user context clicks on "Add to cart" button in the context of "<product_name>" and navigates to the cart
	# click on Checkout, fill First name with <first_name>, fill Last name with <last_name>, fill Zip/Postal code with <last_name>, click on Checkout
	When The user fills the shipping details with first name "<first_name>", last name "<last_name>", zip code "<last_name>" and proceeds to checkout
		Examples:
		| username   | password  | product_name                     | first_name | last_name |
		| blinq_user | let_me_in | Mizu Bottle - Durable Hot & Cold | sd         | sdf       |
