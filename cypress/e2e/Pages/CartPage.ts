class CartPage {
    open() {
        cy.get('#cartur').click();
    };

    verifyProductInCart(productName: string) {
        cy.get(".success td").contains(productName).should("exist");
    };

};

export const cartPage = new CartPage();