const controller = {

    gallery: null,
    addPhotoBtn: null,

    init() {
        this.gallery = document.querySelector("#gallery");
        this.addPhotoBtn = document.querySelector('#add-photo-btn');
        this.addPhotoBtn.addEventListener('click', this.requestForRandomUser.bind(controller));
    },

    createCard(name, email, src,) {
        var card = document.createElement('div');
        var imgContainer = document.createElement('div');
        var img = document.createElement('img');
        var cardDetails = document.createElement('div');
        img.setAttribute('src', src);
        img.setAttribute('alt', name);
        card.classList.add('thumb');
        imgContainer.appendChild(img);
        cardDetails.classList.add('thumb-details');
        var CDheading = document.createElement('div');
        var heading = document.createElement('h1');
        heading.innerText = name;
        CDheading.appendChild(heading);
        var CDdetail = document.createElement('div');
        var detail = document.createElement('span');
        detail.innerText = email;
        CDdetail.appendChild(detail);
        cardDetails.appendChild(CDheading);
        cardDetails.appendChild(CDdetail);
        card.appendChild(imgContainer);
        card.appendChild(cardDetails);
        return card;
    },

    appendCard(userObj) {
        this.gallery.appendChild(
            this.createCard(
                (userObj.results[0].name.title + " " + userObj.results[0].name.first + " " + userObj.results[0].name.last),
                userObj.results[0].email,
                userObj.results[0].picture.large));
    },

    async requestForRandomUser() {
        var userData;
        await DAO.getRandomUser().then(data => userData = data);
        this.appendCard(userData);
    }
}

                