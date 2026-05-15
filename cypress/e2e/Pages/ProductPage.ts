class ProductPage {
    addToCart() {
        cy.get(".col-sm-12 > .btn").click();
    }
}

export const productPage = new ProductPage();