import basePage from "../../../support/KPTS/NikolaDzajevic/basePage"
import elementsPage from "../../../support/KPTS/NikolaDzajevic/elementsPage"

describe('Demo QA', () => {

    const BasePage = new basePage()
    const ElementsPage = new elementsPage()

    beforeEach(() => {
        cy.visit('https://demoqa.com')
    })

    it('Web page load properly and elements are displayed properly', () => {
        cy.get('header > a > img').should('be.visible')
        BasePage.elementsField().should('be.visible')
        BasePage.formsField().should('be.visible')
        BasePage.alertsField().should('be.visible')
        BasePage.widgetsField().should('be.visible')
        BasePage.interactionsField().should('be.visible')
        BasePage.bookField().should('be.visible')
    })




})