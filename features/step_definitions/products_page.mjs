import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_add_to_cart: {
    locators: [{ text: "{product_name}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  button_go_to_cart: {
    locators: [
      { css: 'internal:label="Go to cart"i', priority: 1 },
      { css: 'internal:label="Go to cart"s', priority: 1 },
      { css: 'internal:role=button[name="Go to cart"i]', priority: 1 },
      { css: 'internal:role=button[name="Go to cart"s]', priority: 1 },
      { css: "div >> internal:has-text=/^1$/", priority: 1 },
      { css: 'internal:text="1"s >> xpath=../..', priority: 1 },
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
 * The user context clicks on "Add to cart" button in the context of "<product_name>" and navigates to the cart
 * @param {string} _param_0  param 0
 * @param {string} _product_name  product name
 * @recorder
 * @path=/products
 */
async function the_user_context_clicks_on_add_to_cart_button_in_the_context_of_product_name_and_navigates_to_the_cart(
  _param_0,
  _product_name
) {
  // source: recorder
  // implemented_at: 2025-03-26T10:57:24.007Z
  const _params = { _param_0, _product_name };
  //  Click on button_add_to_cart in the context of <product_name>
  await context.stable.click(elements["button_add_to_cart"], _params, { context: _product_name }, this);
  // Click on Go to cart button
  await context.stable.click(elements["button_go_to_cart"], _params, null, this);
}

When(
  "The user context clicks on {string} button in the context of {string} and navigates to the cart",
  { timeout: 120000 },
  the_user_context_clicks_on_add_to_cart_button_in_the_context_of_product_name_and_navigates_to_the_cart
);

/**
 * The user logs out from the Shop BlinqIO page
 * @recorder
 * @path=/products
 */
async function the_user_logs_out_from_the_shop_blinqio_page() {
  // source: recorder
  // implemented_at: 2025-03-26T11:13:56.659Z
  const _params = {};
  // Click on B button
  await context.stable.click(elements["button_b"], _params, null, this);
  // Click on Logout menuitem
  await context.stable.click(elements["menuitem_logout"], _params, null, this);
}

When("The user logs out from the Shop BlinqIO page", { timeout: 120000 }, the_user_logs_out_from_the_shop_blinqio_page);
