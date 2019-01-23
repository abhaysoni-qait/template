const controller = {

    gallery:null,
    addPhotoBtn:null,

    createCard(src, alt) {
        var card = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);
        card.classList.add('thumb');
        card.appendChild(img);
        return card;
    },

    appendCard() {
        this.gallery.appendChild(this.createCard('./assets/images/05.jpg', 'img5'));
    }
}