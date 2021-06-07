beforeEach(() => {});

describe("check homepage link ", () => {
  it("can go to home page", () => {
    cy.visit("/");
  });
});

describe("check burger menu", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("check if the burger manu is or not in the screen after click", () => {
    cy.get("#burger").click();
    cy.get("#menu").should("be.visible");
    cy.get("#burger").click();
    cy.get("#menu").should("not.be.visible");
  });

  it("navigate one of the england page", () => {
    cy.get("#burger").click();
    cy.get("#menu").get("a[href*='england']").click();
    cy.url().should("include", "/england");
  });

  it("navigate to signup page", () => {
    cy.get("#burger").click();
    cy.get("#menu").get("a[href*='signup']").click();
    cy.url().should("include", "/signup");
  });

  it("navigate to login", () => {
    cy.get("#burger").click();
    cy.get("#menu").get("a[href*='login']").click();
    cy.url().should("include", "/login");
  });
});

describe("Check Itineraries", () => {
  it("check if the see all lead you to all the Itineraries", () => {
    cy.visit("/");
    cy.get("a[href*='itineraries']").contains("See all").click();
    cy.url().should("include", "/itineraries");
  });
});

describe("Check UK TRAVEL GUIDE on nav lead you to the home", () => {
  it("check if the see all lead you to all the Itineraries", () => {
    cy.visit("/itineraries");
    cy.get("a[class*='navTitle']").contains("UK TRAVEL GUIDE").click();
    cy.url().should("include", "/");
  });
});
