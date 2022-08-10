/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/


//                  SOLUTION
/*
> First we will have to compare the length of the string and the provided number,
  if the provided string is longer, then we'll split it into an array, then using the slice method,
  we will get the extract with the appropriate length, pass it to a variable amd append the ... to the end of the variable


*/
function truncateString(str, num)
{
    if(str.length <= num)
    {
        return str;
    }

    else
    {
        strArr = str.split('');
        let truncated_str = strArr.slice(0,num).join('');
        let result = truncated_str.trim() + "..."
        
        return result;

    }
  }
  
  console.log(truncateString("A-",1));