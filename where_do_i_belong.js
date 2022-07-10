/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

//                  SOLUTION
//  First we'll sort the array using the sort method, then we'll loop through the 
//  sorted array and in each iteration, we will be comparing if the, number 
//  (second argument) is less than current number in the iteration, then we will return the
//  index of the current number in iteration
//  in the iteration


function getIndexToIns(arr, num)
{
    //sorting the array
    arr.sort((a,b) => {return a-b});

    //Then we loop while checking for the condition where num is less than the number in the array
    for(let number of arr)
    {
        if(num < number)
        {
            return arr.indexOf(number);
        }
    }
    
}
  
console.log(getIndexToIns([20,3,5],19));
