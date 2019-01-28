//we are binding load event to make sure init run only after when the page has completed loading
window.addEventListener('load', init);

//this method will only run  once and will do all the initialization process of our Application
function init(){
    controller.init();
}