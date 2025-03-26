import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_favorites_list: {
    locators: [
      { css: 'internal:role=button[name="Favorites list"i]', priority: 1 },
      { css: 'internal:role=button[name="Favorites list"s]', priority: 1 },
      { css: 'button >> internal:has-text="Favorites list"i', priority: 1 },
      { css: "button >> internal:has-text=/^Favorites list$/", priority: 1 },
    ],
    element_name: "Favorites list button",
  },
  null_favorites_list: {
    locators: [
      {
        css: 'internal:text="Skip to NavigationSkip to"i >> xpath=../../.. >> internal:text="Favorites list"i',
        index: 1,
        priority: 2,
      },
      {
        css: 'internal:text="Skip to NavigationSkip to"i >> xpath=../../.. >> internal:text="Favorites list"s',
        index: 1,
        priority: 2,
      },
    ],
    element_name: "Favorites list Text",
  },
  button_new: {
    locators: [
      { css: 'internal:role=button[name="New"i]', priority: 1 },
      { css: 'internal:role=button[name="New"s]', priority: 1 },
      { css: 'internal:text="New"s >> xpath=..', priority: 1 },
      { css: "a >> internal:has-text=/^New$/", priority: 1 },
    ],
    element_name: "New button",
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
 * The user hovers on the "Favorites list" button and clicks on "New" to create a new account
 * @param {string} _param_0  param 0
 * @param {string} _param_1  param 1
 * @recorder
 * @path=/lightning/o/Account/list
 */
async function the_user_hovers_on_the_favorites_list_button_and_clicks_on_new_to_create_a_new_account(
  _param_0,
  _param_1
) {
  // source: recorder
  // implemented_at: 2025-03-26T11:01:58.913Z
  const _params = { _param_0, _param_1 };
  // Hover Favorites list button
  await context.stable.hover(elements["button_favorites_list"], _params, null, this);
  // Click on Favorites list Text
  await context.stable.click(elements["null_favorites_list"], _params, null, this);
  // Click on New button
  await context.stable.click(elements["button_new"], _params, null, this);
}

When(
  "The user hovers on the {string} button and clicks on {string} to create a new account",
  { timeout: 180000 },
  the_user_hovers_on_the_favorites_list_button_and_clicks_on_new_to_create_a_new_account
);
