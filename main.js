class Card {
     
    _open = false
    _match = false

    constructor(container, number) {
        this.card = document.createElement('div')
        this.card.classList.add('card')
        this.card.textContent = number

        this.card.addEventListener('click', () => {
            if (this._open == false && this._match == false) {
                this._open = !this._open
            }
        })
        container.append(this.card)
    }

    set open(value) {
        this._open = value;
        value ? this.card.classList.add('open') : this.card.classList.remove('open')
    }

    get open() {
        return this._open
    }

    get match() {
        return this._match;
    }

    set match(value) {
        this._match = value;
        value ? this.card.classList.add('match') : this.card.classList.remove('match');
    }
}


let newCard = new Card(document.getElementById('game'), 4);