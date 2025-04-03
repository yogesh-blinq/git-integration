Feature: User registration flow
Scenario Outline: Sign up with google
	Then Navigate to "https://dev.remo.co/"
	# click on Accept All
	When The user clicks on the "Accept All" button
	Then Navigate to "https://dev.remo.co/"
	# fill Email Address* with <email_address>, click on Sign up now
	When The user fills the email address with "<email_address>" and navigates to the sign-up page
	# fill Email Address* with <email_address_1>, click on Sign up with Google Sign up with Google
	When The user signs up with email address "<email_address_1>" using Google
		Examples:
		| email_address | email_address_1 |
		| yogesh        |                 |
