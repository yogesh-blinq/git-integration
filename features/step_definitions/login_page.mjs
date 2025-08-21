import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  text_log_in: {
    locators: [
      { css: 'internal:text="Log In"i', priority: 1 },
      { css: 'internal:text="Log In"s', priority: 1 },
      { css: 'internal:text="Log InUsername *Password *"i >> div >> internal:has-text="Log In"i', priority: 1 },
      { css: 'internal:text="Log InUsername *Password *Login"i >> div >> internal:has-text="Log In"i', priority: 1 },
      { css: 'internal:text="Log InUsername *Password *Login"s >> div >> internal:has-text="Log In"i', priority: 1 },
    ],
    element_name: "Log In Text",
    element_key: "text_log_in",
  },
  text_log_inusername_password_login: {
    locators: [
      {
        css: 'div >> internal:has-text="Log InUsername *Password *"i',
        climb: 1,
        text: "{login_form_label}",
        priority: 1,
      },
    ],
    element_name: "Log InUsername *Password *Login Text",
    element_key: "text_log_inusername_password_login",
  },
  button_login: {
    locators: [
      { css: 'internal:text="Login"s', priority: 1 },
      { css: 'internal:text="Login"i', priority: 1 },
      { css: 'button >> internal:has-text="Login"i', priority: 1 },
      { css: "button >> internal:has-text=/^Login$/", priority: 1 },
      { css: 'internal:role=button[name="Login"s]', priority: 1 },
    ],
    element_name: "Login button",
    element_key: "button_login",
  },
  button_login_1: {
    locators: [
      { css: 'internal:role=button[name="Login"i]', priority: 1 },
      { css: 'internal:role=button[name="Login"s]', priority: 1 },
      { css: 'internal:text="Login"i', priority: 1 },
      { css: 'internal:text="Login"s', priority: 1 },
      { css: 'button >> internal:has-text="Login"i', priority: 1 },
      { css: "button >> internal:has-text=/^Login$/", priority: 1 },
      { css: "button" },
      { css: "[tabindex]" },
    ],
    element_name: "LOGIN button",
    tagName: null,
    element_key: "button_login_1",
  },
};

/**
 * The user interacts with the login form labeled as "<login_form_label>"
 * @param {string} _login_form_label  login form label
 * @recorder
 * @path=/login
 */
async function the_user_interacts_with_the_login_form_labeled_as_login_form_label(_login_form_label) {
  // source: recorder
  // implemented_at: 2025-08-18T17:41:35.842Z
  const _params = { _login_form_label };
  // Click on Log In Text
  await context.web.click(elements["text_log_in"], _params, null, this);
  //  Click on text_log_inusername_password_login in the context of <login_form_label>
  await context.web.click(
    elements["text_log_inusername_password_login"],
    _params,
    { context: _login_form_label },
    this
  );
  // Click on Login button
  await context.web.click(elements["button_login"], _params, null, this);
}

Given(
  "The user interacts with the login form labeled as {string}",
  { timeout: 180000 },
  the_user_interacts_with_the_login_form_labeled_as_login_form_label
);

/**
 * The user clicks on the Login button on the login page
 * @ai
 */
async function the_user_clicks_on_the_login_button_on_the_login_page() {
  // source: ai
  // implemented_at: 2025-08-21T10:01:52.686Z
  const _params = {};
  // Click on LOGIN button
  await context.web.click(elements["button_login_1"], _params, null, this);
}

Given(
  "The user clicks on the Login button on the login page",
  { timeout: 60000 },
  the_user_clicks_on_the_login_button_on_the_login_page
);
