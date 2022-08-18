// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('addPetToPetStore', (petId, petName, categoryName, photoUrl) => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
        "id": petId,
        "category": {
            "id": 0,
            "name": categoryName
        },
        "name": petName,
        "photoUrls": [
            photoUrl
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', petName)
        expect(response.body).to.have.property('id', petId)
    })
})

Cypress.Commands.add('deletePetFromPetStore', (petId) => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('findPetInPetStore', (petId, petName, categoryName) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', petName)
        expect(response.body).to.have.property('id', petId)
        // expect(response.body).to.have.property('category/name', categoryName)
    })
})

Cypress.Commands.add('updatePetInPetStore', (petId, petName, newCategoryName, photoUrl) => {
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
        "id": petId,
        "category": {
            "id": 0,
            "name": newCategoryName
        },
        "name": petName,
        "photoUrls": [
            photoUrl
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', petName)
        expect(response.body).to.have.property('id', petId)
    })
})

Cypress.Commands.add('checkPetIsDeletedFromPetStore', (petId) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200)
    })
})