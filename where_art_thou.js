/* 


Make a function that looks through an array of objects
(first argument) and returns an array of all objects
 that have matching name and value pairs(second argument). 
Each name and value pair of the source object has to be present
 in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object 
from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

*/

function whatIsInAName(collection, source) 
{
  //  Creating an array of keys for the source object
  let keys = Object.keys(source);
  //  filtering through the collection array checking whether every key in the 
  //  source object, is present in the collection object and the value in the
  //  collection object is similar to the value in the source object
  let myArr = collection.filter((obj) => {
    return keys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] == source[key];
    })
  })
  //  Then return the filtered array
    return myArr;
  }
  
  console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));