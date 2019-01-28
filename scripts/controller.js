// we create controller object as const so no one can override it because this object is gonna be available
// globally and can be overriden by anyone . which ofcourse we do not want to happen

const controller = {

    // we create this member variable and make them refer to certain elements of DOM so we
    // dont need to search them again and again and save the overhead
    gallery: null,
    addPhotoBtn: null,

    // this method is just run once for initialization of our controller object
    init: () => {
        this.gallery = document.querySelector("#gallery");
        this.addPhotoBtn = document.querySelector('#add-photo-btn');
        this.addPhotoBtn.addEventListener('click', controller.requestForRandomUser.bind(controller));
    },

    // this  method creates a copy of card dynamically and fill the received data in it
    createCard: (name, email, src) => {
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

    // this method call's create method and then appends it in the gallery
    appendCard: (userObj) => {
        this.gallery.appendChild(
            controller.createCard(
                `${userObj.results[0].name.title} ${userObj.results[0].name.first} ${userObj.results[0].name.last}`,
                userObj.results[0].email,
                userObj.results[0].picture.large));
    },

    // this method call dao method for data and waits for resposne and passes the data to append card method
    async requestForRandomUser() {
        var userData;
        await DAO.getRandomUser().then(response=>response.json()).then(data => userData = data);
        this.appendCard(userData);
    }
}