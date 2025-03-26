import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_account_name: {
    locators: [
      { css: 'internal:label="*Account Name"i', priority: 1 },
      { css: 'internal:label="*Account Name"s', priority: 1 },
      { css: 'internal:role=textbox[name="*Account Name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="*Account Name"s]', priority: 1 },
    ],
    element_name: "*Account Name textbox",
  },
  button_save: {
    locators: [
      { css: 'internal:role=button[name="Save"s]', priority: 1 },
      { css: 'button.slds-button.slds-button_brand[name="SaveEdit"]', priority: 3 },
    ],
    element_name: "Save button",
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
 * The user fills the account name with "<account_name>" and saves the new account
 * @param {string} _account_name  account name
 * @recorder
 * @path=/lightning/o/Account/new
 */
async function the_user_fills_the_account_name_with_account_name_and_saves_the_new_account(_account_name) {
  // source: recorder
  // implemented_at: 2025-03-26T11:01:58.926Z
  const _params = { _account_name };
  // Fill *Account Name textbox with "_account_name"
  await context.stable.clickType(elements["textbox_account_name"], _account_name, false, _params, null, this);
  // Click on Save button
  await context.stable.click(elements["button_save"], _params, null, this);
}

When(
  "The user fills the account name with {string} and saves the new account",
  { timeout: 120000 },
  the_user_fills_the_account_name_with_account_name_and_saves_the_new_account
);
