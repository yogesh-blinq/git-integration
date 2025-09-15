import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  textbox_username: {
    locators: [
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
    element_key: "textbox_username",
  },
  text_accepted_usernames_are_blinq_userbl: {
    locators: [
      { css: 'internal:text="Accepted usernames are:"i >> xpath=../..', priority: 1 },
      {
        css: 'internal:text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"i >> xpath=..',
        priority: 1,
      },
      {
        css: 'internal:text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"s >> xpath=..',
        priority: 1,
      },
      {
        css: 'internal:text="Log InUsername *Password *"i >> xpath=../.. >> div >> internal:has-text="Accepted usernames are:"i',
        priority: 2,
        index: 0,
      },
      {
        css: 'internal:text="Log InUsername *Password *"i >> xpath=../.. >> div >> internal:has-text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"i',
        priority: 2,
        index: 0,
      },
    ],
    element_name: "Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in Text",
    element_key: "text_accepted_usernames_are_blinq_userbl",
  },
  textbox_username_1: {
    locators: [
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
    element_key: "textbox_username_1",
  },
  textbox_username_2: {
    locators: [
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
    element_key: "textbox_username_2",
  },
  textbox_username_3: {
    locators: [
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
    element_key: "textbox_username_3",
  },
  textbox_password: {
    locators: [
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
    element_key: "textbox_password",
  },
};

/**
 * The user logs in with username "<username>" and password "<password>"
 * @param {string} _username  username
 * @param {string} _password  password
 * @recorder
 * @path=/login
 */
async function the_user_logs_in_with_username_username_and_password_password(_username, _password) {
  // source: recorder
  // implemented_at: 2025-09-08T15:50:15.183Z
  const _params = { _username, _password };
  // Click on Username textbox
  await context.web.click(elements["textbox_username"], _params, null, this);
  // Click on Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in Text
  await context.web.click(elements["text_accepted_usernames_are_blinq_userbl"], _params, null, this);
  // Click on Username textbox
  await context.web.click(elements["textbox_username_1"], _params, null, this);
  // Press v
  await context.web.clickType(elements["textbox_username_2"], "v", null, _params, { press: true }, this);
  // Fill Username textbox with "_username"
  await context.web.clickType(elements["textbox_username_3"], _username, false, _params, null, this);
  // Fill Password textbox with "_password"
  await context.web.clickType(elements["textbox_password"], _password, false, _params, null, this);
}

Given(
  "The user logs in with username {string} and password {string}",
  { timeout: 360000 },
  the_user_logs_in_with_username_username_and_password_password
);
