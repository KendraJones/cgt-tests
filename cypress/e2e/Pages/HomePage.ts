class HomePage {
    visit() {
        cy.visit('https://demoblaze.com/');
    }

    selectCategory(category: "phone" | "notebook" | "monitor") {
        cy.get(`[onclick="byCat('${category}')"]`).click();
    };

    openFirstProduct() {
        cy.get(".card-block .card-title a").first().click();
    };

};

export const homePage = new HomePage();