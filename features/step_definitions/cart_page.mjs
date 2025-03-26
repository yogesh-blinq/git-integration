import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_checkout: {
    locators: [
      { css: 'internal:role=button[name="Checkout"i]', priority: 1 },
      { css: 'internal:role=button[name="Checkout"s]', priority: 1 },
      { css: 'internal:text="Checkout"i', priority: 1 },
      { css: 'internal:text="Checkout"s', priority: 1 },
      { css: 'button >> internal:has-text="Checkout"i', priority: 1 },
    ],
    element_name: "Checkout button",
  },
  textbox_first_name: {
    locators: [
      { css: 'internal:label="First name *"i', priority: 1 },
      { css: 'internal:label="First name *"s', priority: 1 },
      { css: 'internal:role=textbox[name="First name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="First name"s]', priority: 1 },
    ],
    element_name: "First name textbox",
  },
  textbox_last_name: {
    locators: [
      { css: 'internal:label="Last name *"i', priority: 1 },
      { css: 'internal:label="Last name *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Last name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Last name"s]', priority: 1 },
    ],
    element_name: "Last name textbox",
  },
  textbox_zip_postal_code: {
    locators: [
      { css: 'internal:label="Zip/Postal code *"i', priority: 1 },
      { css: 'internal:label="Zip/Postal code *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Zip/Postal code"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Zip/Postal code"s]', priority: 1 },
    ],
    element_name: "Zip/Postal code textbox",
  },
  button_checkout_1: {
    locators: [
      { css: 'internal:role=button[name="Continue"i]', priority: 1 },
      { css: 'internal:text="Continue"i', priority: 1 },
      { css: 'internal:text="Continue"s', priority: 1 },
      { css: 'button >> internal:has-text="Continue"i', priority: 1 },
    ],
    element_name: "Checkout button",
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
 * The user fills the shipping details with first name "<first_name>", last name "<last_name>", zip code "<last_name>" and proceeds to checkout
 * @param {string} _first_name  first name
 * @param {string} _last_name  last name
 * @param {string} _last_name1  last name1
 * @recorder
 * @path=/cart
 */
async function the_user_fills_the_shipping_details_with_first_name_first_name_last_name_last_name_zip_code_last_name_and_proceeds_to_checkout(
  _first_name,
  _last_name,
  _last_name1
) {
  // source: recorder
  // implemented_at: 2025-03-26T10:57:24.022Z
  const _params = { _first_name, _last_name, _last_name1 };
  // Click on Checkout button
  await context.stable.click(elements["button_checkout"], _params, null, this);
  // Fill First name textbox with "_first_name"
  await context.stable.clickType(elements["textbox_first_name"], _first_name, false, _params, null, this);
  // Fill Last name textbox with "_last_name"
  await context.stable.clickType(elements["textbox_last_name"], _last_name, false, _params, null, this);
  // Fill Zip/Postal code textbox with "_last_name"
  await context.stable.clickType(elements["textbox_zip_postal_code"], _last_name, false, _params, null, this);
  // Click on Checkout button
  await context.stable.click(elements["button_checkout_1"], _params, null, this);
}

When(
  "The user fills the shipping details with first name {string}, last name {string}, zip code {string} and proceeds to checkout",
  { timeout: 300000 },
  the_user_fills_the_shipping_details_with_first_name_first_name_last_name_last_name_zip_code_last_name_and_proceeds_to_checkout
);
