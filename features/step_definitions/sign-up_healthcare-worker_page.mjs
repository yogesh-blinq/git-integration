import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  null_address: {
    locators: [{ css: 'internal:text="Address"s >> xpath=..', priority: 1 }],
    element_name: "Address Text",
  },
  textbox_first_name: {
    locators: [
      { css: 'internal:label="First Name"i', priority: 1 },
      { css: 'internal:label="First Name"s', priority: 1 },
      { css: 'internal:role=textbox[name="First Name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="First Name"s]', priority: 1 },
    ],
    element_name: "First Name textbox",
  },
  textbox_last_name: {
    locators: [
      { css: 'internal:label="Last Name"i', priority: 1 },
      { css: 'internal:label="Last Name"s', priority: 1 },
      { css: 'internal:role=textbox[name="Last Name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Last Name"s]', priority: 1 },
    ],
    element_name: "Last Name textbox",
  },
  textbox_address: {
    locators: [
      { css: 'internal:label="Address"s', priority: 1 },
      { css: 'internal:role=textbox[name="Address"s]', priority: 1 },
    ],
    element_name: "Address textbox",
  },
  link_london_uk: {
    locators: [
      { css: 'internal:role=link[name="London, UK"s]', priority: 1 },
      { css: 'internal:text="London, UK"s', priority: 1 },
      { css: "a >> internal:has-text=/^London, UK$/", priority: 1 },
    ],
    element_name: "London, UK link",
  },
  null_choose_your_profession: {
    locators: [
      { css: 'internal:text="Choose your Profession"i', priority: 1 },
      { css: 'internal:text="Choose your Profession"s', priority: 1 },
    ],
    element_name: "Choose your Profession Text",
  },
  null_contact_lens_optician: {
    locators: [
      { css: 'internal:text="Contact Lens Optician"s', priority: 1 },
      { css: "div >> internal:has-text=/^Contact Lens Optician$/", priority: 1 },
    ],
    element_name: "Contact Lens Optician Text",
  },
  button_get_started: {
    locators: [
      { css: 'internal:role=button[name="Get Started"i]', priority: 1 },
      { css: 'internal:role=button[name="Get Started"s]', priority: 1 },
      { css: 'internal:text="Get Started"s', priority: 1 },
      { css: 'button >> internal:has-text="Get Started"i', priority: 1 },
      { css: "button >> internal:has-text=/^Get Started$/", priority: 1 },
    ],
    element_name: "Get Started button",
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
 * The user fills the sign-up form with first name "<first_name>", last name "<last_name>", address "<address>" and selects profession
 * @param {string} _first_name  first name
 * @param {string} _last_name  last name
 * @param {string} _address  address
 * @recorder
 * @path=/sign-up/healthcare-worker
 */
async function the_user_fills_the_signup_form_with_first_name_first_name_last_name_last_name_address_address_and_selects_profession(
  _first_name,
  _last_name,
  _address
) {
  // source: recorder
  // implemented_at: 2025-03-26T08:08:39.094Z
  const _params = { _first_name, _last_name, _address };
  // Click on Address Text
  await context.stable.click(elements["null_address"], _params, null, this);
  // Fill First Name textbox with "_first_name"
  await context.stable.clickType(elements["textbox_first_name"], _first_name, false, _params, null, this);
  // Fill Last Name textbox with "_last_name"
  await context.stable.clickType(elements["textbox_last_name"], _last_name, false, _params, null, this);
  // Fill Address textbox with "_address"
  await context.stable.clickType(elements["textbox_address"], _address, false, _params, null, this);
  // Click on London, UK link
  await context.stable.click(elements["link_london_uk"], _params, null, this);
  // Click on Choose your Profession Text
  await context.stable.click(elements["null_choose_your_profession"], _params, null, this);
  // Click on Contact Lens Optician Text
  await context.stable.click(elements["null_contact_lens_optician"], _params, null, this);
  // Click on Get Started button
  await context.stable.click(elements["button_get_started"], _params, null, this);
}

When(
  "The user fills the sign-up form with first name {string}, last name {string}, address {string} and selects profession",
  { timeout: 480000 },
  the_user_fills_the_signup_form_with_first_name_first_name_last_name_last_name_address_address_and_selects_profession
);
