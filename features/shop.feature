Feature: shop

Scenario Outline:  buy item
  Given login with "<username>" and "<password>"
  Given add to basket "<item>"
  When open basket
  When checkout with first name "guy", last name "arieli", zip "100102"
  Then verify "Thank you for your order" can be found in the page

    
    Examples:
    | username    | password   | item                               |
    | blinq_user  | let_me_in  | Urban Backpack - Compact & Durable |

Scenario Outline: User login and checkout
	# verify page contains text Log In
	Then Verify the text "Log In" can be found in the page
	# fill Username with <username>, fill Password with <password>, click on Login
	Given The user logs in with username "<username>" and password "<password>"
	# click on Add to cart in the context of <keyboard_product_name>, click on Add to cart in the context of <bottle_product_name>, click on Go to cart
	When The user context clicks on "Add to cart" button in the context of "<keyboard_product_name>" and "<bottle_product_name>", then navigates to the cart
	# click on add-product, click on add-product, click on Checkout, click on Checkout
	When The user adds products to the cart and proceeds to checkout
	Then Identify the text "Thank you for your order", climb "1" levels in the page, validate text "We'll send you a notification within 2 days when it ships." can be found in the context
		Examples:
		| username   | password  | keyboard_product_name           | bottle_product_name              |
		| blinq_user | let_me_in | KeyX 3000 - Mechanical Keyboard | Mizu Bottle - Durable Hot & Cold |
