import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  textbox_password: {
    locators: [
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
    element_key: "textbox_password",
  },
  paragraph_accepted_usernames_are_: {
    locators: [
      { css: 'internal:text="Accepted usernames are:"s', priority: 1 },
      { css: 'internal:text="Accepted usernames are:"i', priority: 1 },
      { css: 'p >> internal:has-text="Accepted usernames are:"i', priority: 1 },
      { css: "p >> internal:has-text=/^Accepted usernames are:$/", priority: 1 },
      { css: 'internal:role=paragraph >> internal:has-text="Accepted usernames are:"i', priority: 1 },
    ],
    element_name: "Accepted usernames are: paragraph",
    element_key: "paragraph_accepted_usernames_are_",
  },
  paragraph_blinq_user: {
    locators: [
      { css: 'internal:text="{user_element_id}"s', priority: 1 },
      { css: 'internal:text="{user_element_id}"i', priority: 1 },
      { css: 'p >> internal:has-text="{user_element_id}"i', priority: 1 },
      { css: "p >> internal:has-text=/^{user_element_id}$/", priority: 1 },
      { css: 'internal:role=paragraph >> internal:has-text="{user_element_id}"i', priority: 1 },
    ],
    element_name: "blinq_user paragraph",
    element_key: "paragraph_blinq_user",
  },
  paragraph_blinq_user_1: {
    locators: [
      { css: 'internal:text="blinq_user"s', priority: 1 },
      { css: 'internal:text="blinq_user"i', priority: 1 },
      { css: 'p >> internal:has-text="blinq_user"i', priority: 1 },
      { css: "p >> internal:has-text=/^blinq_user$/", priority: 1 },
      { css: 'internal:role=paragraph >> internal:has-text="blinq_user"i', priority: 1 },
    ],
    element_name: "blinq_user paragraph",
    element_key: "paragraph_blinq_user_1",
  },
  banner_shop_now: {
    locators: [
      { css: 'internal:text="Shop NOW"s >> xpath=../../..', priority: 1 },
      { css: 'internal:text="Shop NOW"i >> xpath=../../..', priority: 1 },
      { css: 'header >> internal:has-text="Shop NOW"i', priority: 1 },
      { css: "header >> internal:has-text=/^Shop NOW$/", priority: 1 },
      { css: 'internal:role=banner >> internal:has-text="Shop NOW"i', priority: 1 },
    ],
    element_name: "Shop NOW banner",
    element_key: "banner_shop_now",
  },
  text_accepted_usernames_are_blinq_userbl: {
    locators: [
      { css: 'internal:text="Accepted usernames are:"i >> xpath=../..', priority: 1 },
      {
        css: 'internal:text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"i >> xpath=..',
        priority: 1,
      },
      {
        css: 'internal:text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"s >> xpath=..',
        priority: 1,
      },
      {
        css: 'internal:text="Log InUsername *Password *"i >> xpath=../.. >> div >> internal:has-text="Accepted usernames are:"i',
        priority: 2,
        index: 0,
      },
      {
        css: 'internal:text="Log InUsername *Password *"i >> xpath=../.. >> div >> internal:has-text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"i',
        priority: 2,
        index: 0,
      },
    ],
    element_name: "Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in Text",
    element_key: "text_accepted_usernames_are_blinq_userbl",
  },
  text_accepted_usernames_are_blinq_userbl_1: {
    locators: [
      { css: 'internal:text="Accepted usernames are:"i >> xpath=../..', priority: 1 },
      {
        css: 'internal:text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"i >> xpath=..',
        priority: 1,
      },
      {
        css: 'internal:text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"s >> xpath=..',
        priority: 1,
      },
      {
        css: 'internal:text="Log InUsername *Password *"i >> xpath=../.. >> div >> internal:has-text="Accepted usernames are:"i',
        priority: 2,
        index: 0,
      },
      {
        css: 'internal:text="Log InUsername *Password *"i >> xpath=../.. >> div >> internal:has-text="Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in"i',
        priority: 2,
        index: 0,
      },
    ],
    element_name: "Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in Text",
    element_key: "text_accepted_usernames_are_blinq_userbl_1",
  },
};

/**
 * The user navigates to the login page and clicks on the Password textbox
 * @recorder
 * @path=/login
 */
async function the_user_navigates_to_the_login_page_and_clicks_on_the_password_textbox() {
  // source: recorder
  // implemented_at: 2025-11-25T07:31:59.835Z
  const _params = {};
  // Click on Password textbox
  await context.web.click(elements["textbox_password"], _params, null, this);
}

Given(
  "The user navigates to the login page and clicks on the Password textbox",
  { timeout: 60000 },
  the_user_navigates_to_the_login_page_and_clicks_on_the_password_textbox
);

/**
 * The user clicks on the paragraph Accepted usernames are:
 * @recorder
 * @path=/login
 */
async function the_user_clicks_on_the_paragraph_accepted_usernames_are() {
  // source: recorder
  // implemented_at: 2025-11-25T07:33:50.038Z
  const _params = {};
  // Click on Accepted usernames are: paragraph
  await context.web.click(elements["paragraph_accepted_usernames_are_"], _params, null, this);
}

When(
  "The user clicks on the paragraph Accepted usernames are:",
  { timeout: 60000 },
  the_user_clicks_on_the_paragraph_accepted_usernames_are
);

/**
 * The user Parameterized clicks on the "<user_element_id>"
 * @param {string} _user_element_id  user element id
 * @recorder
 * @path=/login
 */
async function the_user_parameterized_clicks_on_the_user_element_id(_user_element_id) {
  // source: recorder
  // implemented_at: 2025-12-10T10:34:54.550Z
  const _params = { _user_element_id };
  //  Parameterized click on <user_element_id>
  await context.web.click(elements["paragraph_blinq_user"], _params, null, this);
}

When(
  "The user Parameterized clicks on the {string}",
  { timeout: 60000 },
  the_user_parameterized_clicks_on_the_user_element_id
);

/**
 * abc2
 * @recorder
 * @path=/login
 */
async function abc2() {
  // source: recorder
  // implemented_at: 2025-12-10T11:10:32.850Z
  const _params = {};
  // Click on blinq_user paragraph
  await context.web.click(elements["paragraph_blinq_user_1"], _params, null, this);
}

When("abc2", { timeout: 60000 }, abc2);

/**
 * The user navigates to the Shop NOW page
 * @recorder
 * @path=/login
 */
async function the_user_navigates_to_the_shop_now_page() {
  // source: recorder
  //coment
  // implemented_at: 2026-02-02T08:18:57.632Z
  const _params = {};
  // Click on Shop NOW banner
  await context.web.click(elements["banner_shop_now"], _params, null, this);
  // Click on Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in Text
  await context.web.click(elements["text_accepted_usernames_are_blinq_userbl"], _params, null, this);
  // Click on Accepted usernames are:blinq_userblinq_adminPassword for all users:let_me_in Text
  await context.web.click(elements["text_accepted_usernames_are_blinq_userbl_1"], _params, null, this);
}

Given("The user navigates to the Shop NOW page", { timeout: 180000 }, the_user_navigates_to_the_shop_now_page);
