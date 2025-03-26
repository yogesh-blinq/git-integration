import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_add_product: {
    locators: [
      { css: 'li >> internal:has-text="KeyX 3000 - Mechanical"i >> internal:label="add-product"i', priority: 1 },
      { css: 'internal:text="KeyX 3000 - Mechanical Keyboard1$"i >> internal:label="add-product"i', priority: 2 },
      { css: 'internal:text="KeyX 3000 - Mechanical Keyboard1$"i >> internal:label="add-product"s', priority: 2 },
      {
        css: 'internal:text="KeyX 3000 - Mechanical Keyboard1$"i >> internal:role=button[name="add-product"i]',
        priority: 2,
      },
      {
        css: 'internal:text="KeyX 3000 - Mechanical Keyboard1$"i >> internal:role=button[name="add-product"s]',
        priority: 2,
      },
    ],
    element_name: "add-product button",
  },
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
  button_back_home: {
    locators: [
      { css: 'internal:role=button[name="Back home"i]', priority: 1 },
      { css: 'internal:role=button[name="Back home"s]', priority: 1 },
      { css: 'internal:text="Back home"i', priority: 1 },
      { css: 'internal:text="Back home"s', priority: 1 },
      { css: 'button >> internal:has-text="Back home"i', priority: 1 },
      { css: "button >> internal:has-text=/^Back home$/", priority: 1 },
    ],
    element_name: "Back home button",
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
 * The user adds a product to the cart, proceeds to checkout with first name "<first_name>", last name "<last_name>", zip code "<zip_code>", and navigates back home
 * @param {string} _first_name  first name
 * @param {string} _last_name  last name
 * @param {string} _zip_code  zip code
 * @recorder
 * @path=/cart
 */
async function the_user_adds_a_product_to_the_cart_proceeds_to_checkout_with_first_name_first_name_last_name_last_name_zip_code_zip_code_and_navigates_back_home(
  _first_name,
  _last_name,
  _zip_code
) {
  // source: recorder
  // implemented_at: 2025-03-26T08:04:19.355Z
  const _params = { _first_name, _last_name, _zip_code };
  // Click on add-product button
  await context.stable.click(elements["button_add_product"], _params, null, this);
  // Click on Checkout button
  await context.stable.click(elements["button_checkout"], _params, null, this);
  // Fill First name textbox with "_first_name"
  await context.stable.clickType(elements["textbox_first_name"], _first_name, false, _params, null, this);
  // Fill Last name textbox with "_last_name"
  await context.stable.clickType(elements["textbox_last_name"], _last_name, false, _params, null, this);
  // Fill Zip/Postal code textbox with "_zip_code"
  await context.stable.clickType(elements["textbox_zip_postal_code"], _zip_code, false, _params, null, this);
  // Click on Checkout button
  await context.stable.click(elements["button_checkout_1"], _params, null, this);
  // Click on Back home button
  await context.stable.click(elements["button_back_home"], _params, null, this);
}

When(
  "The user adds a product to the cart, proceeds to checkout with first name {string}, last name {string}, zip code {string}, and navigates back home",
  { timeout: 420000 },
  the_user_adds_a_product_to_the_cart_proceeds_to_checkout_with_first_name_first_name_last_name_last_name_zip_code_zip_code_and_navigates_back_home
);
