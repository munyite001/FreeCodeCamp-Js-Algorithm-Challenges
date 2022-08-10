/*
Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

//  What we can do is :
//  First to split the provided string into an array (strArr)
//  Then we create an empty string variable (newStr)
//  Then we loop in reverse of the strArr while adding each elemen to the created variable(newStr)
function reverseString(str)
{
    let strArr = str.split(''); //  splitting the provided string into an array
    let newStr = '';    // Empty string variable that will store the reversed string
   
   //Reverse loop in the strArr while adding the elemnts to the newStr variable
    for(let i = strArr.length-1; i >= 0; i--)
    {
        newStr += strArr[i];
    }

    return newStr;
}
  
  reverseString("hello");