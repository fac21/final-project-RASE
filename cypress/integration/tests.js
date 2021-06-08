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

  it("check if the burger menu is or not in the screen after click", () => {
    cy.get("#burger").click();
    cy.get("#menu").should("be.visible");
    cy.get("#burger").click();
    cy.get("#menu").should("not.be.visible");
  });

  it("navigate one of the england page", () => {
    cy.get("#burger").click();
    cy.get("#menu").get("a[href*='england']").click({ multiple: true });
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

describe("Check individual itinerary pages", () => {
  it("Check that link to individual page works", () => {
    cy.visit("/itineraries");
    cy.get("a[href*='itinerary/1']").click({ multiple: true });
    cy.url().should("include", "1");
  });

  it("check that individual itinerary page displays all data", () => {
    cy.visit("/itineraries");
    cy.get("a[href*='itinerary/5']").click({ multiple: true });
    cy.url().should("include", "5");
    cy.contains("Need car");
    cy.contains("£1400");
    cy.contains("Day One");
    cy.contains("Oxford, Stratford Upon Avon");
  });

  it("Back to home link working on individual itinerary page", () => {
    cy.visit("itinerary/4");
    cy.contains("Back to home").click();
    cy.url().should("include", "/");
  });
});

describe("Checking cookies", () => {
  // it("Checking sign up works", () => {
  //   cy.visit("/signup");
  //   cy.get("form").find("input[name='email']").type("test@test.com");
  //   cy.get("form").find("input[name='password']").type("test");
  //   cy.get("form").submit();
  //   cy.url().should("include", "/");
  //   cy.getCookie("sid").should("exist");
  // });

  it("Checking if cookie has been set on login", () => {
    cy.visit("/login");
    cy.get("form").find("input[name='email']").type("test@test.com");
    cy.get("form").find("input[name='password']").type("test");
    cy.get("form").submit();
    cy.url().should("include", "/");
    cy.getCookie("sid").should("exist");
  });

  it("Checking if log in doesn't exist, cookie isn't generated", () => {
    cy.visit("/login");
    cy.get("form").find("input[name='email']").type("test2@test.com");
    cy.get("form").find("input[name='password']").type("test2");
    cy.get("form").submit();
    cy.url().should("include", "/");
    cy.getCookie("sid").should("not.exist");
  });
});
