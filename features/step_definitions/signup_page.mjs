import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_email_address_: {
    locators: [
      { css: 'internal:label="Email Address*"i', priority: 1 },
      { css: 'internal:label="Email Address*"s', priority: 1 },
      { css: 'internal:role=textbox[name="Email Address*"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Email Address*"s]', priority: 1 },
    ],
    element_name: "Email Address* textbox",
  },
  button_sign_up_with_google_sign_up_with_: {
    locators: [
      { css: 'internal:role=button[name="Sign up with Google Sign up"i]', priority: 1 },
      { css: 'internal:role=button[name="Sign up with Google Sign up with Google"i]', priority: 1 },
      { css: 'internal:role=button[name="Sign up with Google Sign up with Google"s]', priority: 1 },
      { css: 'internal:text="Sign up with Google"i >> xpath=../..', priority: 1 },
      { css: 'internal:text="Sign up with Google"s >> xpath=../..', priority: 1 },
      { css: 'button >> internal:has-text="Sign up with Google"i', priority: 1 },
      { css: "button >> internal:has-text=/^Sign up with Google$/", priority: 1 },
    ],
    element_name: "Sign up with Google Sign up with Google button",
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
 * The user signs up with email address "<email_address_1>" using Google
 * @param {string} _email_address_1  email address 1
 * @recorder
 * @path=/signup
 */
async function the_user_signs_up_with_email_address_email_address_1_using_google(_email_address_1) {
  // source: recorder
  // implemented_at: 2025-04-03T05:25:34.691Z
  const _params = { _email_address_1 };
  // Fill Email Address* textbox with "_email_address_1"
  await context.stable.clickType(elements["textbox_email_address_"], _email_address_1, false, _params, null, this);
  // Click on Sign up with Google Sign up with Google button
  await context.stable.click(elements["button_sign_up_with_google_sign_up_with_"], _params, null, this);
}

When(
  "The user signs up with email address {string} using Google",
  { timeout: 120000 },
  the_user_signs_up_with_email_address_email_address_1_using_google
);
