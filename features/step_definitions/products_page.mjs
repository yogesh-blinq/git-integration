import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_add_to_cart: {
    locators: [{ text: "{keyboard_product_name}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  button_add_to_cart_1: {
    locators: [{ text: "{bottle_product_name}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  null_accessorystore_go_to_cart_b: {
    locators: [
      { css: 'internal:text="AccessoryStore2B"i', priority: 1 },
      { css: 'internal:text="AccessoryStore2B"s', priority: 1 },
      { css: "div >> internal:has-text=/^AccessoryStore2B$/", priority: 1 },
    ],
    element_name: "AccessoryStore Go to cart B Text",
  },
  button_go_to_cart: {
    locators: [
      { css: 'internal:label="Go to cart"i', priority: 1 },
      { css: 'internal:label="Go to cart"s', priority: 1 },
      { css: 'internal:role=button[name="Go to cart"i]', priority: 1 },
      { css: 'internal:role=button[name="Go to cart"s]', priority: 1 },
      { css: "div >> internal:has-text=/^2$/", priority: 1 },
      { css: 'internal:text="2"s >> xpath=../..', priority: 1 },
    ],
    element_name: "Go to cart button",
  },
  button_b: {
    locators: [
      { css: 'internal:role=button[name="B"i]', priority: 1 },
      { css: 'internal:role=button[name="B"s]', priority: 1 },
      { css: 'internal:text="B"s >> xpath=..', priority: 1 },
      { css: 'button >> internal:has-text="B"i', priority: 1 },
      { css: "button >> internal:has-text=/^B$/", priority: 1 },
    ],
    element_name: "B button",
  },
  menuitem_logout: {
    locators: [
      { css: 'internal:role=menuitem[name="Logout"i]', priority: 1 },
      { css: 'internal:role=menuitem[name="Logout"s]', priority: 1 },
      { css: 'internal:text="Logout"i', priority: 1 },
      { css: 'internal:text="Logout"s', priority: 1 },
      { css: 'li >> internal:has-text="Logout"i', priority: 1 },
      { css: "li >> internal:has-text=/^Logout$/", priority: 1 },
    ],
    element_name: "Logout menuitem",
  },
  button_add_to_cart_2: {
    locators: [{ text: "{urban_backpack_description}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  button_add_to_cart_3: {
    locators: [{ text: "{mizu_bottle_description_1}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  button_b_1: {
    locators: [
      { css: 'internal:role=button[name="B"i]', priority: 1 },
      { css: 'internal:role=button[name="B"s]', priority: 1 },
      { css: 'internal:text="B"s >> xpath=..', priority: 1 },
      { css: 'button >> internal:has-text="B"i', priority: 1 },
      { css: "button >> internal:has-text=/^B$/", priority: 1 },
    ],
    element_name: "B button",
  },
  menuitem_logout_1: {
    locators: [
      { css: 'internal:role=menuitem[name="Logout"i]', priority: 1 },
      { css: 'internal:role=menuitem[name="Logout"s]', priority: 1 },
      { css: 'internal:text="Logout"i', priority: 1 },
      { css: 'internal:text="Logout"s', priority: 1 },
      { css: 'li >> internal:has-text="Logout"i', priority: 1 },
      { css: "li >> internal:has-text=/^Logout$/", priority: 1 },
    ],
    element_name: "Logout menuitem",
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
 * The user context clicks on "Add to cart" for "<keyboard_product_name>" and "<bottle_product_name>" and navigates to the cart
 * @param {string} _param_0  param 0
 * @param {string} _keyboard_product_name  keyboard product name
 * @param {string} _bottle_product_name  bottle product name
 * @recorder
 * @path=/products
 */
async function the_user_context_clicks_on_add_to_cart_for_keyboard_product_name_and_bottle_product_name_and_navigates_to_the_cart(
  _param_0,
  _keyboard_product_name,
  _bottle_product_name
) {
  // source: recorder
  // implemented_at: 2025-03-26T08:04:19.340Z
  const _params = { _param_0, _keyboard_product_name, _bottle_product_name };
  //  Click on button_add_to_cart in the context of <keyboard_product_name>
  await context.stable.click(elements["button_add_to_cart"], _params, { context: _keyboard_product_name }, this);
  //  Click on button_add_to_cart_1 in the context of <bottle_product_name>
  await context.stable.click(elements["button_add_to_cart_1"], _params, { context: _bottle_product_name }, this);
  // Click on AccessoryStore Go to cart B Text
  await context.stable.click(elements["null_accessorystore_go_to_cart_b"], _params, null, this);
  // Click on Go to cart button
  await context.stable.click(elements["button_go_to_cart"], _params, null, this);
}

When(
  "The user context clicks on {string} for {string} and {string} and navigates to the cart",
  { timeout: 240000 },
  the_user_context_clicks_on_add_to_cart_for_keyboard_product_name_and_bottle_product_name_and_navigates_to_the_cart
);

/**
 * The user logs out from the products page and navigates to the login page
 * @recorder
 * @path=/products
 */
async function the_user_logs_out_from_the_products_page_and_navigates_to_the_login_page() {
  // source: recorder
  // implemented_at: 2025-03-26T08:04:19.377Z
  const _params = {};
  // Click on B button
  await context.stable.click(elements["button_b"], _params, null, this);
  // Click on Logout menuitem
  await context.stable.click(elements["menuitem_logout"], _params, null, this);
}

When(
  "The user logs out from the products page and navigates to the login page",
  { timeout: 120000 },
  the_user_logs_out_from_the_products_page_and_navigates_to_the_login_page
);

/**
 * The user context clicks on "Add to cart" button in the context of "<urban_backpack_description>", "<mizu_bottle_description_1>", "<mizu_bottle_description_1>" and logs out
 * @param {string} _param_0  param 0
 * @param {string} _urban_backpack_description  urban backpack description
 * @param {string} _mizu_bottle_description_1  mizu bottle description 1
 * @param {string} _mizu_bottle_description_11  mizu bottle description 11
 * @recorder
 * @path=/products
 */
async function the_user_context_clicks_on_add_to_cart_button_in_the_context_of_urban_backpack_description_mizu_bottle_description_1_mizu_bottle_description_1_and_logs_out(
  _param_0,
  _urban_backpack_description,
  _mizu_bottle_description_1,
  _mizu_bottle_description_11
) {
  // source: recorder
  // implemented_at: 2025-03-26T08:18:57.615Z
  const _params = { _param_0, _urban_backpack_description, _mizu_bottle_description_1, _mizu_bottle_description_11 };
  //  Click on button_add_to_cart_2 in the context of <urban_backpack_description>
  await context.stable.click(elements["button_add_to_cart_2"], _params, { context: _urban_backpack_description }, this);
  //  Click on button_add_to_cart_3 in the context of <mizu_bottle_description_1>
  await context.stable.click(elements["button_add_to_cart_3"], _params, { context: _mizu_bottle_description_1 }, this);
  //  Click on button_add_to_cart_3 in the context of <mizu_bottle_description_1>
  await context.stable.click(elements["button_add_to_cart_3"], _params, { context: _mizu_bottle_description_1 }, this);
  // Click on B button
  await context.stable.click(elements["button_b_1"], _params, null, this);
  // Click on Logout menuitem
  await context.stable.click(elements["menuitem_logout_1"], _params, null, this);
}

When(
  "The user context clicks on {string} button in the context of {string}, {string}, {string} and logs out",
  { timeout: 300000 },
  the_user_context_clicks_on_add_to_cart_button_in_the_context_of_urban_backpack_description_mizu_bottle_description_1_mizu_bottle_description_1_and_logs_out
);
