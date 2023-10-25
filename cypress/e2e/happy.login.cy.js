import login from '../fixtures/logadmin.json';
import selector from '../fixtures/selectors-login.json';

describe("Log in for admin tests", () => {
    beforeEach(function () {
        cy.visit("http://qamid.tmweb.ru/admin/");
    });

    it("Should successfully log in with correct login and password", () => {
        cy.login(login.validEmail, login.validPassword);
        cy.contains("Управление залами").should("be.visible");
    });
});