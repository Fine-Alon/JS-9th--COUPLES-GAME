export default class Card {

    _open = false
    _match = false

    constructor(container, number, active) {
        this.createImg(number);
        this.createElement();
        container.append(this.$card);
        this.$card.append(this.img);
        this.number = number;

        this.$card.addEventListener('click', () => {
                this.$card.append(this.img);
            if (this.open === false && this.match === false) {
                this.open = !this.open
            }
            active(this)
            console.log(this.$card)
            console.log(this)
        })
    }

    createImg(num) {
        const cardImgs = [
            './img/img1.jpg',
            './img/img2.png',
            './img/img3.jpg',
            './img/img4.png',
            './img/img5.png',
            './img/img6.png',
            './img/img7.png',
            './img/img8.png',
        ]
        this.img = document.createElement('img')
        this.img.src = cardImgs[num]

        return this.img
    }

    createElement() {
        this.$card = document.createElement('button')
        this.$card.classList.add('card')
        this.$card.disabled = false

        return this.$card
    }

    set number(num) {
        this._number = num

        this.$card.textContent = this._number


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




