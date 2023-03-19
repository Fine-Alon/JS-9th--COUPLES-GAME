import Card from "./card.js"

function createGame(container, countCards) {
    // create game field
    let mainArr = [],
        cardsArr = [],
        firstCard = null,
        secondCard = null

    for (let digit = 1; digit <= countCards / 2; digit++) {
        mainArr.push(digit, digit);
    }
    mainArr = mainArr.sort(() => Math.random() - 0.5)

    for (let el = 0; el < mainArr.length; el++) {
        cardsArr.push(new Card(container, mainArr[el], activity));
    }

    function activity(obj) {
        // logic
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number != secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }
        if (firstCard == null) {
            firstCard = obj
        } else if (secondCard == null) {
            secondCard = obj
        }

        if (firstCard != null && secondCard != null) {
            if (firstCard.number == secondCard.number) {
                firstCard.match = true
                secondCard.match = true
                firstCard = null
                secondCard = null
            }
        }

        // CONDISHION FOR WINN
        if (container.querySelectorAll('.match').length == cardsArr.length) {
            alert('YOU WINN!')
            container.innerHTML = ''
            mainArr = []
            cardsArr = []
            firstCard = null
            secondCard = null
            createGame(document.getElementById('game'), countCards)
        }
    }


}

createGame(document.getElementById('game'), 6)