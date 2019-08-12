describe("Main View - Hmepage ", () => {

    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("Page renders with, nav, carousel, cards, accordion's and POI's", () => {
        cy.get(".navbar");
        cy.get(".carousel-item").should("have.length", 3);
        cy.get(".card").should("have.length", 6);
        cy.get(".accordion").should("have.length", 2);
        cy.get(".poi").should("have.length", 4);
    });

    describe("Accordian forms", () => {
        it("Accordian click function", () => {
            cy.get(".accordion").should("have.length", 2)
            .click({ multiple: true })
            cy.get("select[name=attractionType]").select("historic").should("have.value", "historic")
            cy.get("input[name=attractionName]").type("Attraction Name Example")
            cy.get("textarea[name=attractionDescription").type("Attraction description Example in the text area")

        });
    });

});