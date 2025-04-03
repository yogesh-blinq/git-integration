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
    element_name: "Username",
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
 * login with "<username> + <username_faker>" and "p"
 * @param {string} _username_____username_faker  username     username faker
 * @param {string} _username_username_faker  username username faker
 * @ai
 */
async function login_with_username_email_and_password(_username_____username_faker, _username_username_faker) {
  // source: ai
  // implemented_at: 2025-04-03T11:22:44.619Z
  const _params = { _username_____username_faker, _username_username_faker };
  // Fill Username with ""<username_faker>""
  await context.stable.clickType(elements["textbox_username"], "<username_faker>", false, _params, null, this);
  // Click on LOGIN
  await context.stable.click(elements["button_login"], _params, null, this);
}

Given("login with {string} and {string}", { timeout: 240000 }, login_with_username_email_and_password);

/**
 * verify "Invalid" can be found in the page
 * @param {string} _invalid_text  invalid text
 * @ai
 */
async function verify_invalid_text_can_be_found_in_the_page(_invalid_text) {
  // source: ai
  // implemented_at: 2025-04-03T11:22:44.656Z
  const _params = { _invalid_text };
  // Verify page contains text "_invalid_text"
  await context.stable.verifyTextExistInPage(_invalid_text, null, this);
}

Then("verify {string} can be found in the page", { timeout: 120000 }, verify_invalid_text_can_be_found_in_the_page);
