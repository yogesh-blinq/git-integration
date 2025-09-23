import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  listitem_: {
    locators: [
      { css: 'internal:text="blinq_user"i >> xpath=..', priority: 1 },
      { css: 'internal:text="blinq_user"s >> xpath=..', priority: 1 },
      { css: 'li >> internal:has-text="blinq_user"i', priority: 1 },
      { css: "li >> internal:has-text=/^blinq_user$/", priority: 1 },
      { css: "li:nth-of-type(1)" },
      { css: "ul > li.MuiListItem-root.MuiListItem-gutters.MuiListItem-padding:nth-child(1)" },
    ],
    element_name: "blinq_user list item",
    tagName: null,
    element_key: "listitem_",
  },
  button_login_1: {
    locators: [
      { css: 'internal:role=button[name="Login"i]', priority: 1 },
      { css: 'internal:role=button[name="Login"s]', priority: 1 },
      { css: 'internal:text="Login"i', priority: 1 },
      { css: 'internal:text="Login"s', priority: 1 },
      { css: 'button >> internal:has-text="Login"i', priority: 1 },
      { css: "button >> internal:has-text=/^Login$/", priority: 1 },
      { css: "button" },
      { css: "[tabindex]" },
    ],
    element_name: "LOGIN button",
    tagName: null,
    element_key: "button_login_1",
  },
  listitem__1: {
    locators: [
      { css: 'internal:text="blinq_admin"i >> xpath=..', priority: 1 },
      { css: 'internal:text="blinq_admin"s >> xpath=..', priority: 1 },
      { css: 'li >> internal:has-text="blinq_admin"i', priority: 1 },
      { css: "li >> internal:has-text=/^blinq_admin$/", priority: 1 },
      { css: "li:nth-of-type(2)" },
      { css: "ul > li.MuiListItem-root.MuiListItem-gutters.MuiListItem-padding:nth-child(2)" },
    ],
    element_name: "blinq_admin list item",
    tagName: null,
    element_key: "listitem__1",
  },
};

/**
 * User clicks on login button
 * @ai
 * @path=/login
 */
async function user_clicks_on_login_button() {
  // source: ai
  // implemented_at: 2025-09-22T10:53:31.707Z
  const _params = {};
  // Click on LOGIN button
  await context.web.click(elements["button_login_1"], _params, null, this);
}

When("User clicks on login button", { timeout: 120000 }, user_clicks_on_login_button);

/**
 * user clicks on the blinq_user text
 * @ai
 * @path=/login
 */
async function user_clicks_on_the_blinq_user_text() {
  // source: ai
  // implemented_at: 2025-09-22T10:38:33.292Z
  const _params = {};
  // Click on blinq_user list item
  await context.web.click(elements["listitem_"], _params, null, this);
}

When("user clicks on the blinq_user text", { timeout: 120000 }, user_clicks_on_the_blinq_user_text);

/**
 * the user clicks on blinq_admin
 * @ai
 * @path=/login
 */
async function the_user_clicks_on_blinq_admin() {
  // source: ai
  // implemented_at: 2025-09-22T10:58:46.470Z
  const _params = {};
  // Click on blinq_admin list item
  await context.web.click(elements["listitem__1"], _params, null, this);
}

When("the user clicks on blinq_admin", { timeout: 120000 }, the_user_clicks_on_blinq_admin);
