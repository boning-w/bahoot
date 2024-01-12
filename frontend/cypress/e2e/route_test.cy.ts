describe("Test route - /test", () => {
  it("displays Test!", () => {
    cy.visit("http://localhost:3000/test");
    cy.contains("Test!").should("be.visible");
  });
});
