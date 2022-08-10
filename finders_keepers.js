/*
Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true.
If no element passes the test, return undefined.
*/


//                      SOLUTION

/*  
>   We'll need to create a loop that iterates over the array, ad in each iteration,
    we'll be calling the function func and passing the current element, if it returns true
    we'll end the loop by return that element
    If theres no element in the loop that passes the test, we'll return undefined 



*/
function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(func(arr[i]) == true)
        {
            num = arr[i]
            return num;
        }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);