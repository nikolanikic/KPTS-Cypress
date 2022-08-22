/// <reference types="cypress" />

describe('PetStore API - Testing', () => {

  const petName = 'Orbit'
  const categoryName = 'Snake'
  const petId = 357
  const photoUrl = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
  const newCategoryName = 'Dog'

  describe('E2E PetStore Flow', () => {

    it('User is able to add a new pet to the PetStore', () => {
      cy.addPetToPetStore(petId, petName, categoryName, photoUrl)
    })

    it('User is able to find pet that was previuosly added', () => {
      cy.findPetInPetStore(petId, petName, categoryName)
    })

    it('User is able to update Category Name for added pet', () => {
      cy.updatePetInPetStore(petId, petName, newCategoryName, photoUrl)
    })

    it('User is able to check updated pet', () => {
      cy.findPetInPetStore(petId, petName, newCategoryName)
    })

    it('User is able to delet added pet from the PetStore', () => {
      cy.deletePetFromPetStore(petId)
    })

    it('User is able to check that Pet is really deleted from the PetStore', () => {
      cy.checkPetIsDeletedFromPetStore(petId)
    })
    

  })

})
