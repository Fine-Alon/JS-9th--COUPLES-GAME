/// <reference types="cypress" />

describe('couples game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('after input any number we get this number*2 cards to play', () => {
    const number = 5
    cy.get('form input').type(`${number}{enter}`);
    cy.get("button").should("have.length", number * 2)
  })

  it('start time should be 30 sec', () => {
    cy.get('form div').should("contain.text", 30)
  })

  it('default number of cards is empty, so user have to put number ', () => {
    cy.get('form input').should("contain.text", '')
  })

  it('every card must be close at the start', () => {
    const number = 5
    cy.get('form input').type(`${number}{enter}`);
    cy.get("button").each(($button) => {
      cy.wrap($button).should('have.class', 'card')
    })
  })

  it('after press on a card it must be still opened', () => {
    const number = 5
    cy.get('form input').type(`${number}{enter}`);
    cy.get("button").eq(0).click()
      .wait(2000).should("have.class", 'card open')
  })

  it('Should find and keep a pair of cards visible', () => {
    const number = 5
    cy.get('form input').type(`${number}{enter}`);

    let nextCard = 1;
    const isMatch = (cards) => {
      cy.get(cards[0]).click()
      cy.get(cards[nextCard]).click()

      if (cards[0].innerHTML === cards[nextCard].innerHTML) {
        cy.get(cards[0]).should('have.class', 'open')
        cy.get(cards[nextCard]).should('have.class', 'open')
      } else {
        nextCard++
        isMatch(cards)
      }
    }
    cy.get('.card').then(($cards) => {
      isMatch($cards)
    })
  })

  it.only('Both cards must be flipped over if they do not match', () => {
    const number = 5
    cy.get('form input').type(`${number}{enter}`);

    let current = 0
    let next = 1
    const compare = (cards) => {
      console.log(current)
      console.log(next)

      cy.get(cards[current]).click()
      cy.get(cards[next]).click()

      if (cards[current].innerHTML !== cards[next].innerHTML) {
        cy.wait(500)
        cy.get(cards[current]).should('have.class', 'card')
        cy.get(cards[next]).should('have.class', 'card')
      } else {
        current += 2
        next += 2
        compare(cards)
      }
    }
    cy.get('.card').then(($cards) => {
      compare($cards)
    })
  })
})

