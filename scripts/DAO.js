// we create DAO object as const so no one can override it because this object is gonna be available
// globally and can be overriden by anyone . which ofcourse we do not want to happen.
const DAO = {

  //this method calls random user api for soem random user data
   getRandomUser(){

    //this is using jquery

    // return $.ajax({
    //     url: 'https://randomuser.me/api/',
    //     dataType: 'json',
    //     success: function(data) {
    //       return data;
    //     }
    //   });      

    // this is using fetch api of es6 provided for ajax call which returns a promise
      return fetch('https://randomuser.me/api/');
   }
}