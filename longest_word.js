/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


//  Quite Easy. All we have to do, is to split up the string into words
//  then loop through the resulting array, checking for the string with biggest
//  length and assign it to a variable, which we'll later return
function findLongestWordLength(str) {
    
    let strArr = str.split(' ');    // This will split the string at every white space
    let longest = 0
    for(let i = 0; i<strArr.length; i++)
    {
        if(strArr[i].length > longest)
        {
            //  Here in every iteration, we check wether the length of that string is bigger than longest
            //  If it is, we assign longest to that length. At the end of the loop, longest will be the length of longest string
            longest = strArr[i].length;
        }
    }
    
    return longest;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));