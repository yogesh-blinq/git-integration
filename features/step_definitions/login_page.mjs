import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  textbox_password: {
    locators: [
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
    element_key: "textbox_password",
  },
  paragraph_accepted_usernames_are_: {
    locators: [
      { css: 'internal:text="Accepted usernames are:"s', priority: 1 },
      { css: 'internal:text="Accepted usernames are:"i', priority: 1 },
      { css: 'p >> internal:has-text="Accepted usernames are:"i', priority: 1 },
      { css: "p >> internal:has-text=/^Accepted usernames are:$/", priority: 1 },
      { css: 'internal:role=paragraph >> internal:has-text="Accepted usernames are:"i', priority: 1 },
    ],
    element_name: "Accepted usernames are: paragraph",
    element_key: "paragraph_accepted_usernames_are_",
  },
};

/**
 * The user navigates to the login page and clicks on the Password textbox
 * @recorder
 * @path=/login
 */
async function the_user_navigates_to_the_login_page_and_clicks_on_the_password_textbox() {
  // source: recorder
  // implemented_at: 2025-11-25T07:31:59.835Z
  const _params = {};
  // Click on Password textbox
  await context.web.click(elements["textbox_password"], _params, null, this);
}

Given(
  "The user navigates to the login page and clicks on the Password textbox",
  { timeout: 60000 },
  the_user_navigates_to_the_login_page_and_clicks_on_the_password_textbox
);

/**
 * The user clicks on the paragraph Accepted usernames are:
 * @recorder
 * @path=/login
 */
async function the_user_clicks_on_the_paragraph_accepted_usernames_are() {
  // source: recorder
  // implemented_at: 2025-11-25T07:33:50.038Z
  const _params = {};
  // Click on Accepted usernames are: paragraph
  await context.web.click(elements["paragraph_accepted_usernames_are_"], _params, null, this);
}

When(
  "The user clicks on the paragraph Accepted usernames are:",
  { timeout: 60000 },
  the_user_clicks_on_the_paragraph_accepted_usernames_are
);
