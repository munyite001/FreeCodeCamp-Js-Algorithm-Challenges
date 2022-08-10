/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
Do not use the endswith method

*/


//  What we can do in this challenge, is to slice the provided string, str
//  We can do this by first splitting the string into an array using the split method
//  Then using the slice method.
//  For the start parameter for the slice method, we'll use the length of the provided ending to calculate it
function confirmEnding(str, target) {
    let strArr = str.split('');
    let start = strArr.length-(target.length)  // Start parameter for the slice method
    let word = strArr.slice(start).join('') //  We are cutting out a slice from the string ending and joining it to form a variable word


    //  We'll then compare this word to the provided ending to see if they are equal
    if(word == target)
    {
        return true;
    }
    else
    {
        return false;
    }


  }
  
console.log(confirmEnding("Bastian", "n"));