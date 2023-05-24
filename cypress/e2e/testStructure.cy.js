/// <reference types="cypress" />

describe("Context: my First Tests", () => {
  before(() => {
    // runs once before all test cases in this describe block, like beforeClass in TestNG
  });

  beforeEach(() => {
    // runs before each test cases, like beforeMethod in TestNG
    cy.clearCookies();
  });

  after(() => {
    // similiar ro afterClass in TestNG , runs once after all tests finished
  });

  afterEach(() => {
    // similar to afterMethod in TestNG
  });

  it("Opening a web application", () => {
    cy.visit("/registration_form");
  });

  it("Test 2", () => {
    expect(false).to.equal(false);
  });

  it("Test 3", () => {
    expect(false).not.to.equal(true);
  });

  it("Test 4", () => {
    expect(5).to.equal(5);
  });

  it("Test 4", () => {
    expect(true).to.equal("5" == 5);
  });
});
