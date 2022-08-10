/*
Title Case a Sentence

Return the provided string with the first letter of each word capitalized.

Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/


//                  SOLUTION
//  We'll split up the string at each whitespace into an array of words, using the split methods

//  We'll create an array to hold the modified string

//  Then we'll loop through the string array, to get the words in each iteration, then
// we'll create a variable to hold each modified variable, and we'll assign it the  modifid existing word, using the 
//  charAt() method, we'll set the first character to uppercase() then concatenate it with a string slice from index 1 set to lowercase

function titleCase(str)
{
    let strArr = str.split(' ');
    let modifid_arr = [];
    let modified_word = '';
    for(let word of strArr)
    {
        modified_word = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
        modifid_arr.push(modified_word);
    }
    
    let result = modifid_arr.join(' ')
    

    return result;
}

console.log(titleCase("I'm a little tea pot"));