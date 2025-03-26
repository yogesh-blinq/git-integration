Feature: Healthcare Worker Sign Up
Scenario Outline: Healthcare Worker SignUp Process
	# click on Accept All, click on Get Started, click on Get started as a Healthcare Worker
	When The user navigates to the Healthcare Worker sign-up page
	# click on Address, fill First Name with <first_name>, fill Last Name with <last_name>, fill Address with <address>, click on London, UK, click on Choose your Profession, click on Contact Lens Optician, click on Get Started
	When The user fills the sign-up form with first name "<first_name>", last name "<last_name>", address "<address>" and selects profession
		Examples:
		| first_name | last_name | address |
		| Yogesh     | Singh     | London  |
