import Card from "./card.js"

function createGame(container, countCards) {
    // create game field
    let mainArr = [],
        cardsArr = [],
        firstCard = null,
        secondCard = null,
        timer = 5,
        timeToEnd,
        newGame = true

    container.innerHTML = ''

    for (let digit = 1; digit <= countCards / 2; digit++) {
        mainArr.push(digit, digit);
    }
    mainArr = mainArr.sort(() => Math.random() - 0.5)

    for (let el = 0; el < mainArr.length; el++) {
        cardsArr.push(new Card(container, mainArr[el], activity));
    }

    function field(container, timer) {
        let $input,
            $display,
            $wrapper,
            $title,
            $text

        $wrapper = document.createElement('div')
        $wrapper.classList.add('wrapper')
        $input = document.createElement('input')
        $input.classList.add('input')
        $title = document.createElement('h3')
        $title.classList.add('title')
        $title.textContent = 'HOW MANY CARDS YOU WANT TO PLAY?'
        $display = document.createElement('div')
        $display.classList.add('display')
        $display.textContent = timer
        $text = document.createElement('h3')
        $text.textContent = 'TIMER'

        $wrapper.append($title)
        $wrapper.append($input)
        $wrapper.append($text)
        $wrapper.append($display)
        container.append($wrapper)

        return {
            $display,
            $input,
            $text,
            $title
        }
    }

    let createField = field(container, timer)

    function endGame(container, countCards) {
        createField.$display.innerHTML = 'time out'
        setTimeout(() => {
            mainArr = []
            cardsArr = []
            firstCard = null
            secondCard = null
            timer = 5
            newGame = true
            clearInterval(timeToEnd)
        }, 900)
        createGame(container, countCards)
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
            newGame = false
        } else if (secondCard == null) {
            secondCard = obj
        }

        if (firstCard != null && secondCard != null) {
            if (firstCard.number == secondCard.number) {
                firstCard.match = true
                secondCard.match = true
                firstCard = null
                secondCard = null
            } else {
                // hide card if is'nt match 
                setTimeout(() => {
                    firstCard.open = false
                    secondCard.open = false
                    firstCard = null
                    secondCard = null
                }, 500)
            }
        }

        // CONDISHION FOR WINN
        if (container.querySelectorAll('.match').length == cardsArr.length && cardsArr.length !== 0) {
            setTimeout(() => {
                alert('YOU WINN!')
                endGame(container, countCards);
            }, 1000);
        }
        // CONDITION FOR LOSE
        if (obj.open == true) {
            clearInterval(timeToEnd)
            timeToEnd = setInterval(() => {
                if (timer > 0) {
                    timer--
                    createField.$display.innerHTML = timer
                } else {
                    createField.$display.innerHTML = 'time out'
                    setTimeout(() => {
                        alert('YOU LOSE!');
                        endGame(container, countCards);
                    }, 1000);
                }
            }, 1000)
        }
    }
}

createGame(document.getElementById('game'), 6)