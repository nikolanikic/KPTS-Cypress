class elementsPage {

    elementsHeader() {
        return cy.get(':nth-child(1) > .group-header > .header-wrapper')
    }

    textBoxField() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-0')
    }

    fullNameField() {
        return cy.get('#userName')
    }

    emailField() {
        return cy.get('#userEmail')
    }

    currentAdressField() {
        return cy.get('#currentAddress')
    }

    paymentAdressField() {
        return cy.get('#permanentAddress')
    }

    submitButton() {
        return cy.get('#submit')
    }

    submitedName() {
        return cy.get('#name')
    }

    submitedEmail() {
        return cy.get('#email')
    }

    submitedCurrentAdress() {
        return cy.get('.border > #currentAddress')
    }

    submitedPaymentAdress() {
        return cy.get('.border > #permanentAddress')
    }

    checkBoxField() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-1')
    }

    radioButtonField() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-2')
    }

    widgetsField() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-3')
    }

    interactionsField() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-5')
    }

    bookField() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-6')
    }

    formsHeader() {
        return cy.get(':nth-child(2) > .group-header > .header-wrapper')
    }

    alertsHeader() {
        return cy.get(':nth-child(3) > .group-header > .header-wrapper')
    }

    widgetsHeader() {
        return cy.get(':nth-child(4) > .group-header > .header-wrapper')
    }

}
export default elementsPage