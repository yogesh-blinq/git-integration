import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { role: ["textbox", { name: "Username *" }] },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Username"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Username"s]' },
      { strategy: "ID", css: "#username", priority: 1 },
      { strategy: "NAME", css: 'internal:attr=[name="username"i]', priority: 1 },
    ],
    element_name: "Username field",
  },
  textbox_password: {
    locators: [
      { role: ["textbox", { name: "Password *" }] },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Password"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Password"s]' },
      { strategy: "ID", css: "#{password}assword", priority: 1, parameterDependent: true },
      { strategy: "NAME", css: 'internal:attr=[name="{password}assword"i]', priority: 1, parameterDependent: true },
    ],
    element_name: "Password field",
  },
  button_login: {
    locators: [
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="LOGIN"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="LOGIN"s]' },
    ],
    element_name: "LOGIN",
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
 * login with "Cheyanne_Conn" and "p"
 * @param {string} _username  username
 * @param {string} _password  password
 * @ai
 */
async function login_with_username_and_password(_username, _password) {
  // source: ai
  // implemented_at: 2025-04-03T18:49:39.854Z
  const _params = { _username, _password };
  // Fill Username field with "_username"
  await context.stable.clickType(elements["textbox_username"], _username, false, _params, null, this);
  // Fill Password field with "_password"
  await context.stable.clickType(elements["textbox_password"], _password, false, _params, null, this);
  // Click on LOGIN
  await context.stable.click(elements["button_login"], _params, null, this);
}

Given("login with {string} and {string}", { timeout: 240000 }, login_with_username_and_password);
