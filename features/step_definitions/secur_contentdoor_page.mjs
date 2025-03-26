import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  link_accounts: {
    locators: [
      { css: 'internal:role=link[name="Accounts"i]', priority: 1 },
      { css: 'internal:role=link[name="Accounts"s]', priority: 1 },
      { css: "a >> internal:has-text=/^Accounts$/", priority: 1 },
    ],
    element_name: "Accounts link",
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
 * The user navigates to Accounts page
 * @recorder
 * @path=/lightning/page/home
 */
async function the_user_navigates_to_accounts_page() {
  // source: recorder
  // implemented_at: 2025-03-26T11:01:58.903Z
  const _params = {};
  // Click on Accounts link
  await context.stable.click(elements["link_accounts"], _params, null, this);
}

When("The user navigates to Accounts page", { timeout: 60000 }, the_user_navigates_to_accounts_page);
