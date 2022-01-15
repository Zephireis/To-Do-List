

exports.getDate = function(){ //different way of defininf a function as a variable
  const today = new Date(); //tpday is getting the date
  const options = { //options carries weekday, day and month strings (objects)
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return day = today.toLocaleDateString("en-US", options); // day makes the date into a string instead of numbers.

}
 // you can refernce this moduel by requiring it in the main file

exports.getDay = function(){
   const today = new Date(); //tpday is getting the date
   const options = { //options carries weekday, day and month strings (objects)
     weekday: 'long',
   };
   return day = today.toLocaleDateString("en-US", options); // day makes the date into a string instead of numbers.

 }





// module.exports.getDate = getDate; //Don't want to call it but, just export this function so it can be called in trhe main file.



// function getDate(){
//   let today = new Date(); //tpday is getting the date
//   let options = { //options carries weekday, day and month strings (objects)
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long'
//   };
//   return day = today.toLocaleDateString("en-US", options); // day makes the date into a string instead of numbers.
//
// }
//  // you can refernce this moduel by requiring it in the main file
//
// module.exports.getDay = getDay;
//
//  function getDay(){
//    let today = new Date(); //tpday is getting the date
//    let options = { //options carries weekday, day and month strings (objects)
//      weekday: 'long',
//    };
//    return day = today.toLocaleDateString("en-US", options); // day makes the date into a string instead of numbers.
//
//  }
//
//
// console.log(module.exports)
