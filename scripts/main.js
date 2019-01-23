window.addEventListener('load', init);

function init() {
    controller.gallery = document.querySelector("#gallery");
    controller.addPhotoBtn = document.querySelector('#add-photo-btn');
    controller.addPhotoBtn.addEventListener('click', controller.appendCard.bind(controller));
}