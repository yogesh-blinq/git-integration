import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  null_username: {
    locators: [
      { css: 'form div >> internal:has-text="Username *"i', priority: 1 },
      { css: 'internal:text="Username *"i >> xpath=..', priority: 1 },
      { css: 'internal:text="Username *"s >> xpath=..', priority: 1 },
    ],
    element_name: "Username Text",
  },
  null_password: {
    locators: [
      { css: 'form div >> internal:has-text="Password *"i', priority: 1 },
      { css: 'internal:text="Password *"i >> xpath=..', priority: 1 },
      { css: 'internal:text="Password *"s >> xpath=..', priority: 1 },
    ],
    element_name: "Password Text",
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
  button_login: {
    locators: [
      { css: 'internal:role=button[name="Login"i]', priority: 1 },
      { css: 'internal:role=button[name="Login"s]', priority: 1 },
      { css: 'internal:text="Login"i', priority: 1 },
      { css: 'internal:text="Login"s', priority: 1 },
      { css: 'button >> internal:has-text="Login"i', priority: 1 },
      { css: "button >> internal:has-text=/^Login$/", priority: 1 },
    ],
    element_name: "Login button",
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
 * The user attempts to log in on the Shop BlinqIO page
 * @recorder
 * @path=/login
 */
async function the_user_attempts_to_log_in_on_the_shop_blinqio_page() {
  // source: recorder
  // implemented_at: 2025-04-04T08:04:56.423Z
  const _params = {};
  // Click on Username Text
  await context.stable.click(elements["null_username"], _params, null, this);
  // Click on Password Text
  await context.stable.click(elements["null_password"], _params, null, this);
  // Click on Password textbox
  await context.stable.click(elements["textbox_password"], _params, null, this);
  // Click on Login button
  await context.stable.click(elements["button_login"], _params, null, this);
  // Click on Password textbox
  await context.stable.click(elements["textbox_password"], _params, null, this);
  // Click on Login button
  await context.stable.click(elements["button_login"], _params, null, this);
}

Given(
  "The user attempts to log in on the Shop BlinqIO page",
  { timeout: 360000 },
  the_user_attempts_to_log_in_on_the_shop_blinqio_page
);
