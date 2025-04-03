import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_accept_all: {
    locators: [
      { css: 'internal:label="Accept All"i', priority: 1 },
      { css: 'internal:label="Accept All"s', priority: 1 },
      { css: 'internal:role=button[name="Accept All"i]', priority: 1 },
      { css: 'internal:role=button[name="Accept All"s]', priority: 1 },
      { css: 'internal:text="Accept All"i', priority: 1 },
      { css: 'internal:text="Accept All"s', priority: 1 },
      { css: 'button >> internal:has-text="Accept All"i', priority: 1 },
    ],
    element_name: "Accept All button",
  },
  textbox_email_address_: {
    locators: [
      { css: 'internal:label="Email Address*"i', priority: 1 },
      { css: 'internal:label="Email Address*"s', priority: 1 },
      { css: 'internal:role=textbox[name="Email Address*"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Email Address*"s]', priority: 1 },
    ],
    element_name: "Email Address* textbox",
  },
  link_sign_up_now: {
    locators: [
      { css: 'internal:role=link[name="Sign up now"i]', priority: 1 },
      { css: 'internal:role=link[name="Sign up now"s]', priority: 1 },
      { css: 'internal:text="Sign up now"i >> xpath=..', priority: 1 },
      { css: 'internal:text="Sign up now"s >> xpath=..', priority: 1 },
      { css: 'a >> internal:has-text="Sign up now"i', priority: 1 },
    ],
    element_name: "Sign up now link",
  },
};

let context = null;
Before(async function () {
  if (!context) {
    context = await initContext(path, false, false, this);
  }
  await navigate(path);
});
After(async function () {
  await closeContext();
  context = null;
});
/**
 * The user clicks on the "Accept All" button
 * @param {string} _param_0  param 0
 * @recorder
 * @path=/signin
 */
async function the_user_clicks_on_the_accept_all_button(_param_0) {
  // source: recorder
  // implemented_at: 2025-04-03T05:25:34.580Z
  const _params = { _param_0 };
  // Click on Accept All button
  await context.stable.click(elements["button_accept_all"], _params, null, this);
}

When("The user clicks on the {string} button", { timeout: 60000 }, the_user_clicks_on_the_accept_all_button);

/**
 * The user fills the email address with "<email_address>" and navigates to the sign-up page
 * @param {string} _email_address  email address
 * @recorder
 * @path=/signin
 */
async function the_user_fills_the_email_address_with_email_address_and_navigates_to_the_signup_page(_email_address) {
  // source: recorder
  // implemented_at: 2025-04-03T05:25:34.654Z
  const _params = { _email_address };
  // Fill Email Address* textbox with "_email_address"
  await context.stable.clickType(elements["textbox_email_address_"], _email_address, false, _params, null, this);
  // Click on Sign up now link
  await context.stable.click(elements["link_sign_up_now"], _params, null, this);
}

When(
  "The user fills the email address with {string} and navigates to the sign-up page",
  { timeout: 120000 },
  the_user_fills_the_email_address_with_email_address_and_navigates_to_the_signup_page
);
