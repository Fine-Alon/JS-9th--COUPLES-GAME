import Card from "./card.js";

export default class AmazingCard extends Card {

    constructor(container, number, active) {
        super(container, number, active);
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
        this.img.classList.add('img')
        this.img.src = cardImgs[num]
        this.img.addEventListener('error', this.handleImgError.bind(this))
        this.$card.append(this.img);

        return this.img
    }

    //exception for Img that wasn't successfully uploaded
    handleImgError() {
        console.error(`Error loading image for card ${this.number}`)
        this.img.remove()
        this.$card.textContent = this._number
    }


    set number(num) {
        this._number = num
        this.createImg(num)
    }

    get number() {
        return this._number
    }

    set open(value) {
        super.open = value
        value ? this.img.style.zIndex = '1' : this.img.style.zIndex = '-1'
    }

    get open() {
        return this._open;
    }

    set match(value) {
      super.match = value
    }

    get match() {
        return this._match;
    }
}




