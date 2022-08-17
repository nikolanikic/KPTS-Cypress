class productsPage{

    title(){
        return cy.get('.title')
    }

    addBackpackButton(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    addBikeLightButton(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    addTShirtButton(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    shoppingCartButton(){
        return cy.get('.shopping_cart_link')
    }

}
export default productsPage 