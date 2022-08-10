/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

// What we'll do is create a variable to hold the repeated string
// Then create a loop that will add the given string to the created variable, for the given number of times
function repeatStringNumTimes(str, num) {
    let repeated_str = ''
    for(let i = 0; i < num; i++)
    {
        repeated_str += str
    }

    return repeated_str;
  }
  
console.log(repeatStringNumTimes("abc", 3));