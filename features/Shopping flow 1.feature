Feature: Shopping flow 1
Scenario Outline: User login and checkout
	# fill Username with <username>, fill Password with <password>, click on Login
	Given The user logs in with username "<username>" and password "<password>"
	# click on Add to cart in the context of <keyboard_product_name>, click on Add to cart in the context of <bottle_product_name>, click on AccessoryStore Go to cart B, click on Go to cart
	When The user context clicks on "Add to cart" for "<keyboard_product_name>" and "<bottle_product_name>" and navigates to the cart
	# click on add-product, click on Checkout, fill First name with <first_name>, fill Last name with <last_name>, fill Zip/Postal code with <zip_code>, click on Checkout, click on Back home
	When The user adds a product to the cart, proceeds to checkout with first name "<first_name>", last name "<last_name>", zip code "<zip_code>", and navigates back home
	# click on B, click on Logout
	When The user logs out from the products page and navigates to the login page
		Examples:
		| username   | password  | keyboard_product_name           | bottle_product_name              | first_name | last_name | zip_code |
		| blinq_user | let_me_in | KeyX 3000 - Mechanical Keyboard | Mizu Bottle - Durable Hot & Cold | qwe        | qwer      | qwerg    |
