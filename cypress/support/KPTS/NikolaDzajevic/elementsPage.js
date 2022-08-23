class elementsPage {

    textBoxField() {
        return cy.get('.category-cards > :nth-child(2)')
    }

    formsField() {
        return cy.get('.category-cards > :nth-child(2)')
    }
    alertsField() {
        return cy.get('.category-cards > :nth-child(3)')
    }

    widgetsField() {
        return cy.get('.category-cards > :nth-child(4)')
    }

    interactionsField() {
        return cy.get('.category-cards > :nth-child(5)')
    }

    bookField() {
        return cy.get('.category-cards > :nth-child(6)')
    }

}
export default elementsPage