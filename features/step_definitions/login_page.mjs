import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { css: 'internal:label="Username *"i', priority: 1 },
      { css: 'internal:label="Username *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password: {
    locators: [
      { css: 'internal:label="Password *"i', priority: 1 },
      { css: 'internal:label="Password *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
  },
  textbox_username_1: {
    locators: [
      { css: 'internal:label="Username *"i', priority: 1 },
      { css: 'internal:label="Username *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password_1: {
    locators: [
      { css: 'internal:label="Password *"i', priority: 1 },
      { css: 'internal:label="Password *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
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
 * The user logs in with username "<username>" and password "<password>"
 * @param {string} _username  username
 * @param {string} _password  password
 * @recorder
 * @path=/login
 */
async function the_user_logs_in_with_username_username_and_password_password(_username, _password) {
  // source: recorder
  // implemented_at: 2025-03-26T10:57:23.987Z
  const _params = { _username, _password };
  // Fill Username textbox with "_username"
  await context.stable.clickType(elements["textbox_username"], _username, false, _params, null, this);
  // Press Tab
  await context.stable.clickType(elements["textbox_username"], "Tab", null, _params, { press: true }, this);
  // Fill Password textbox with "_password"
  await context.stable.clickType(elements["textbox_password"], _password, false, _params, null, this);
  // Press Enter
  await context.stable.clickType(elements["textbox_password"], "Enter", null, _params, { press: true }, this);
}

Given(
  "The user logs in with username {string} and password {string}",
  { timeout: 240000 },
  the_user_logs_in_with_username_username_and_password_password
);

/**
 * The user logs in with username "<username>" and password "<password>" 2
 * @param {string} _username  username
 * @param {string} _password  password
 * @recorder
 * @path=/login
 */
async function the_user_logs_in_with_username_username_and_password_password_2(_username, _password) {
  // source: recorder
  // implemented_at: 2025-03-26T11:13:56.627Z
  const _params = { _username, _password };
  // Fill Username textbox with "_username"
  await context.stable.clickType(elements["textbox_username_1"], _username, false, _params, null, this);
  // Press Tab
  await context.stable.clickType(elements["textbox_username_1"], "Tab", null, _params, { press: true }, this);
  // Fill Password textbox with "_password"
  await context.stable.clickType(elements["textbox_password_1"], _password, false, _params, null, this);
  // Press Enter
  await context.stable.clickType(elements["textbox_password_1"], "Enter", null, _params, { press: true }, this);
}

Given(
  "The user logs in with username {string} and password {string} 2",
  { timeout: 240000 },
  the_user_logs_in_with_username_username_and_password_password_2
);
