import basePage from "../../../support/KPTS/NikolaDzajevic/basePage"
import elementsPage from "../../../support/KPTS/NikolaDzajevic/elementsPage"

describe('Demo QA', () => {

    const BasePage = new basePage()
    const ElementsPage = new elementsPage()

    const fullName = 'Lazar'
    const email = 'test.mail@gmail.com'
    const currentAdress = 'Adresa'
    const paymentAdress = 'Adresa'

    beforeEach(() => {
        cy.visit('https://demoqa.com')
    })

    it('Web page load properly and elements are displayed properly.', () => {
        cy.get('header > a > img').should('be.visible')
        BasePage.elementsField().should('be.visible')
        BasePage.formsField().should('be.visible')
        BasePage.alertsField().should('be.visible')
        BasePage.widgetsField().should('be.visible')
        BasePage.interactionsField().should('be.visible')
        BasePage.bookField().should('be.visible')
    })

    it('Navigate to Elements Page properly and check if elements are displayed.', () => {
        BasePage.elementsField().click()
        ElementsPage.elementsHeader().should('be.visible')
        ElementsPage.formsHeader().should('be.visible')
        ElementsPage.alertsHeader().should('be.visible')
        ElementsPage.textBoxField().should('be.visible')
        ElementsPage.checkBoxField().should('be.visible')
        ElementsPage.radioButtonField().should('be.visible')
    })

    it('Navigate to Text Box field properly and check if elements are displayed.', () => {
        BasePage.elementsField().click()
        ElementsPage.textBoxField().click()

        ElementsPage.fullNameField().should('be.visible')
        ElementsPage.emailField().should('be.visible')
        ElementsPage.currentAdressField().should('be.visible')
        ElementsPage.paymentAdressField().should('be.visible')
        ElementsPage.submitButton().should('be.visible')

    })

    it('User is able to submit payment on Elements Page.', () => {
        BasePage.elementsField().click()
        ElementsPage.textBoxField().click()

        ElementsPage.fullNameField().type(fullName)
        ElementsPage.emailField().type(email)
        ElementsPage.currentAdressField().type(currentAdress)
        ElementsPage.paymentAdressField().type(paymentAdress)
        ElementsPage.submitButton().click()

    })

})