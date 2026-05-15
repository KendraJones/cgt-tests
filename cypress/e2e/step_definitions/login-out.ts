import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../Pages/LoginPage";

Given('I am on the Practice Test Automation login page', () => {
    loginPage.visit();
});

When('I enter valid PTA credentials', () => {
    loginPage.username('student');
    loginPage.password('Password123');
    loginPage.submit();
});

Then('I am redirected to the dashboard', () => {
    loginPage.successfulLogin('Logged In Successfully');
});

Then('I will be able to click the Log out button', () => {
    loginPage.successfulLogout();
});