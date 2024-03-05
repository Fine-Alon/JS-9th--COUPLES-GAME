export default class Card {

    _open = false
    _match = false

    constructor(container, number, active) {
        this.$card = document.createElement('button')
        this.$card.classList.add('card')
        this.$card.textContent = number
        this.$card.disabled = false
        this._number = number
        container.append(this.$card)
        this.$card.addEventListener('click', () => {
            if (this.open === false && this.match === false) {
                this.open = !this.open
            }
            active(this)
        })
    }
    get number() {
        return this._number
    }

    set open(value) {
        this._open = value;
        value ? this.$card.classList.add('open') : this.$card.classList.remove('open')
    }

    get open() {
        return this._open;
    }

    set match(value) {
        this._match = value;
        value ? this.$card.classList.add('match') : this.$card.classList.remove('match')
    }

    get match() {
        return this._match;
    }
}




