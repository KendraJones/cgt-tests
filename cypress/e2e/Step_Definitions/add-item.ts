import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '../Pages/HomePage';
import { productPage } from '../Pages/ProductPage';
import { cartPage } from '../Pages/CartPage';

Given('I am on the Demoblaze product page', () => {
    homePage.visit();
});

When('I select a cell phone', () => {
    homePage.selectCategory("phone");
    homePage.openFirstProduct();
});

When('I select a laptop', () => {
    homePage.selectCategory("notebook");
    homePage.openFirstProduct();
});

When('I select a monitor', () => {
    homePage.selectCategory("monitor");
    homePage.openFirstProduct();
});

When('add it to the cart', () => {
    productPage.addToCart();
});

Then('I should see the cell phone in the cart', () => {
    cartPage.open();
    cartPage.verifyProductInCart("Samsung galaxy s6");
});

Then('I should see the laptop in the cart', () => {
    cartPage.open();
    cartPage.verifyProductInCart("Sony vaio i5");
});

Then('I should see the monitor in the cart', () => {
    cartPage.open();
    cartPage.verifyProductInCart("Apple monitor 24");
});