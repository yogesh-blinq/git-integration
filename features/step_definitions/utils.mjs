import {
  Given,
  When,
  Then,
  After,
  setDefaultTimeout,
  Before,
  defineStep,
  AfterStep,
  BeforeStep,
} from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
import fs from "fs";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {};

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

BeforeStep(async function (step) {
  if (context) {
    await context.stable.beforeStep(this, step);
  }
});

AfterStep(async function (step) {
  if (context) {
    await context.stable.afterStep(this, step);
  }
});

/**
 * Load test data for a user
 * @param {string} user name of the user to load test data for
 * @protect
 */
async function loadUserData(user) {
  await context.stable.loadTestDataAsync("users", user, this);
}

Given("Load user test data for user {string}", loadUserData);

/**
 * Verify text exsits in page
 * @param {string} text the text to verify exists in page
 * @protect
 */
async function verifyTextExistsInPage(text) {
  await context.stable.verifyTextExistInPage(text, null, this);
}

Then("Verify the text {string} can be found in the page", verifyTextExistsInPage);

/**
 * Click on an element given a description
 * @param {string} elementDescription element description
 * @protect
 */
async function clickOnElement(elementDescription) {
  await context.stable.simpleClick(elementDescription, null, null, this);
}
When("click on {string}", clickOnElement);
When("click {string}", clickOnElement);
When("Click on {string}", clickOnElement);
When("Click {string}", clickOnElement);

/**
 * Fill an element with a value
 * @param {string} elementDescription element description
 * @param {string} value value to fill the element with
 * @protect
 */
async function fillElement(elementDescription, value) {
  await context.stable.simpleClickType(elementDescription, value, null, null, this);
}
When("fill {string} with {string}", fillElement);
When("Fill {string} with {string}", fillElement);
/**
 * Verify text does not exist in page
 * @param {string} text the text to verify does not exist in page
 * @protect
 */
async function verifyTextNotExistsInPage(text) {
  await context.stable.waitForTextToDisappear(text, null, this);
}
Then("Verify the text {string} cannot be found in the page", verifyTextNotExistsInPage);

/**
 * Navigate to "<url>"
 * @param {string} url URL to navigate
 * @protect
 */
async function navigateTo(url) {
  await context.stable.goto(url, this);
}
When("Navigate to {string}", navigateTo);

/**
 * Store browser session "<path>"
 * @param {string} filePath the file path or empty to store in the test data file
 * @protect
 */
async function storeBrowserSession(filePath) {
  await context.stable.saveStoreState(filePath, this);
}
When("Store browser session {string}", storeBrowserSession);

/**
 * Reset browser session with session file "<path>"
 * @param {string} filePath the file path or empty
 * @protect
 */
async function resetBrowserSession(filePath) {  
    await context.stable.restoreSaveState(filePath, this);
}
When("Reset browser session {string}", resetBrowserSession);
