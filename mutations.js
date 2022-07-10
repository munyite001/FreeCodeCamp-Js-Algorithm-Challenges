/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/



//                  SOLUTION
//  So right off the bat, we know that the array will only contain two elements,
//  so we'll split the first element and the second element into independent arrays, then
//  we'll loop through the second array and check if the first array has that element using 
//  includes() method. if not, we'll return false, else, we'll return true at the end of the loop




function mutation(arr) {
    word1 = arr[0].split('');
    word2 = arr[1].split('');
    for(let i = 0; i < word2.length; i++)
    {
        if(!word1.includes(word1[i]))
        {
            return false;
        }
    }

    return true;
  }
  
 console.log(mutation(["Alien", "line"]));