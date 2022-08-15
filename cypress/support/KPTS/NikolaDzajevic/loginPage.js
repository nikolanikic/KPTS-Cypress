class loginPage {

    usernameField() {
        return cy.get('[data-test="username"]')
    }

    passwordField() {
        return cy.get('[data-test="password"]')
    }

    loginButton() {
        return cy.get('[data-test="login-button"]')
    }

    errorMessage() {
        return cy.get('[data-test="error"]')
    }

}
export default loginPage