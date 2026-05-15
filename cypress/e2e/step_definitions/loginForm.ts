import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '../Pages/LoginPage';

Given("I am on the PTA login page", () => {
    loginPage.visit();
});

When('I enter valid credentials', () => {
    loginPage.username('student');
    loginPage.password('Password123');
    loginPage.submit();
});

When('I enter "invalidUser" as a username and "Password123" as password', () => {
    loginPage.username('invalidUser');
    loginPage.password('Password123');
    loginPage.submit();
});

When('I enter "student" as username and "WrongPassword" as password', () => {
    loginPage.username('student');
    loginPage.password('WrongPassword');
    loginPage.submit();
});

When('I submit the form without entering credentials', () => {
    loginPage.submit();
});

When("I click the logout button", () => {
    loginPage.clickLogout();
});

Then("I am redirected to the success page", () => {
    loginPage.successfulLogin('Logged In Successfully');
});

Then('I should see a username error message', () => {
    loginPage.usernameError();
});

Then('I should see a password error message', () => {
    loginPage.passwordError();
});

Then('I should see an error message', () => {
    loginPage.usernameError();
});

Then("I should be redirected to the login page", () => {
    loginPage.redirectedToLogin();
});