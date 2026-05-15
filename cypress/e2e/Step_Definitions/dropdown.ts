import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { dropdownPage } from "../Pages/DropdownPage";

Given('I open the dropdown page', () => {
    dropdownPage.visit();
});

When('I select {string} from the dropdown', (option: string) => {
    dropdownPage.selectOption(option);
});

Then('the dropdown value should be {string}', (value: string) => {
    dropdownPage.shouldHaveValue(value);
});