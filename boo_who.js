/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/


//                              SOLUTION
/*
>   To solve this challenge, we simply need to check type of the given value using the 
    typeof() operator and compare it with the string 'boolean' using the equality operator
    if they match then return true else return false
*/
function booWho(bool) {
    if(typeof(bool) === 'boolean')
    {
        return true
    }
    return false
  }
  
  booWho(null);