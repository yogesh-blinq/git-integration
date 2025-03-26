import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_accept_all: {
    locators: [
      { css: 'internal:role=button[name="Accept All"i] >> nth=1', priority: 3 },
      {
        css: 'body > div.overlay:nth-child(7) > div.cookieWrapper > div.cookieInner > div.btnDiv.cookieConsentBtnWrapper > form[role="form"] > button[name="consentPreference"]:nth-child(3)',
        priority: 3,
      },
    ],
    element_name: "Accept All button",
  },
  button_get_started: {
    locators: [{ css: 'internal:role=button[name="Get Started"s]', priority: 1 }],
    element_name: "Get Started button",
  },
  link_get_started_as_a_healthcare_worker: {
    locators: [
      { css: 'internal:role=link[name="Get started as a Healthcare"i]', priority: 1 },
      { css: 'internal:role=link[name="Get started as a Healthcare Worker"i]', priority: 1 },
      { css: 'internal:role=link[name="Get started as a Healthcare Worker"s]', priority: 1 },
      { css: 'internal:text="Get started as a Healthcare"i >> xpath=..', priority: 1 },
      { css: 'internal:text="Get started as a Healthcare Worker"i >> xpath=..', priority: 1 },
      { css: 'internal:text="Get started as a Healthcare Worker"s >> xpath=..', priority: 1 },
      { css: 'a >> internal:has-text="Get started as a Healthcare"i', priority: 1 },
      { css: 'a >> internal:has-text="Get started as a Healthcare Worker"i', priority: 1 },
      { css: "a >> internal:has-text=/^Get started as a Healthcare Worker$/", priority: 1 },
    ],
    element_name: "Get started as a Healthcare Worker link",
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
 * The user navigates to the Healthcare Worker sign-up page
 * @recorder
 * @path=/
 */
async function the_user_navigates_to_the_healthcare_worker_signup_page() {
  // source: recorder
  // implemented_at: 2025-03-26T08:08:39.064Z
  const _params = {};
  // Click on Accept All button
  await context.stable.click(elements["button_accept_all"], _params, null, this);
  // Click on Get Started button
  await context.stable.click(elements["button_get_started"], _params, null, this);
  // Click on Get started as a Healthcare Worker link
  await context.stable.click(elements["link_get_started_as_a_healthcare_worker"], _params, null, this);
}

When(
  "The user navigates to the Healthcare Worker sign-up page",
  { timeout: 180000 },
  the_user_navigates_to_the_healthcare_worker_signup_page
);
