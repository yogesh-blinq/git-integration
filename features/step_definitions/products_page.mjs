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
  button_add_to_cart_2: {
    locators: [
      { text: "{item}", climb: 2, css: { locator: "button[aria-label='Add to cart']", index: 0 }, priority: 1 },
    ],
    element_name: "Add to cart button for Urban Backpack",
  },
  button_go_to_cart_1: {
    locators: [
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="Go to cart"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="Go to cart"s]' },
      { strategy: "ID", css: "#cart", priority: 1 },
      { css: "[aria-label='Go to cart']", priority: 1 },
      { strategy: "ROLE", css: "internal:role=button", priority: 3 },
    ],
    element_name: "Go to cart button",
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
 * The user context clicks on "Add to cart" button in the context of "<keyboard_product_name>" and "<bottle_product_name>", then navigates to the cart
 * @param {string} _param_0  param 0
 * @param {string} _keyboard_product_name  keyboard product name
 * @param {string} _bottle_product_name  bottle product name
 * @recorder
 * @path=/products
 */
async function the_user_context_clicks_on_add_to_cart_button_in_the_context_of_keyboard_product_name_and_bottle_product_name_then_navigates_to_the_cart(
  _param_0,
  _keyboard_product_name,
  _bottle_product_name
) {
  // source: recorder
  // implemented_at: 2025-04-03T09:56:23.394Z
  const _params = { _param_0, _keyboard_product_name, _bottle_product_name };
  //  Click on button_add_to_cart in the context of <keyboard_product_name>
  await context.stable.click(elements["button_add_to_cart"], _params, { context: _keyboard_product_name }, this);
  //  Click on button_add_to_cart_1 in the context of <bottle_product_name>
  await context.stable.click(elements["button_add_to_cart_1"], _params, { context: _bottle_product_name }, this);
  // Click on Go to cart button
  await context.stable.click(elements["button_go_to_cart"], _params, null, this);
}

When(
  "The user context clicks on {string} button in the context of {string} and {string}, then navigates to the cart",
  { timeout: 180000 },
  the_user_context_clicks_on_add_to_cart_button_in_the_context_of_keyboard_product_name_and_bottle_product_name_then_navigates_to_the_cart
);

/**
 * add to basket "<item>"
 * @param {string} _item  item
 * @ai
 */
async function add_to_basket_item(_item) {
  // source: ai
  // implemented_at: 2025-04-03T10:45:33.401Z
  const _params = { _item };
  // Click on Add to cart button for Urban Backpack
  await context.stable.click(elements["button_add_to_cart_2"], _params, null, this);
}

Given("add to basket {string}", { timeout: 120000 }, add_to_basket_item);

/**
 * open basket
 * @ai
 */
async function open_basket() {
  // source: ai
  // implemented_at: 2025-04-03T10:45:33.431Z
  const _params = {};
  // Click on Go to cart button
  await context.stable.click(elements["button_go_to_cart_1"], _params, null, this);
}

When("open basket", { timeout: 120000 }, open_basket);
