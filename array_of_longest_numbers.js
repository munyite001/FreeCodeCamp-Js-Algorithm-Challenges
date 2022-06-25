/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


                        /*  SOLUTION   */

//  What we'll do, is to create an empty array, that will hold the biggest numbers
//  We'll create a for loop, that will iterate ove the elements of the provided array
//  in each iteration, we'll initialize a variable longest to negative infinity, then, we'll create a nested for loop--
//  --that will iterate over each sub-array, and assigning the longest number to the longest variable
//  after each nested for loop iteration, we'll push the longest variable to the empty array

function largestOfFour(arr)
{
    let longnums = [];   //  Empty array to hold the longest numbers
    
    for(let i = 0; i < arr.length; i++)
    {
        let longest = Number.NEGATIVE_INFINITY;     //  Reason for this is so that it can handle negative numbers
        for(let j = 0; j < arr[i].length; j++)
        {
            if(arr[i][j] > longest)
            {
                longest = arr[i][j];
            }
        }
        
    longnums.push(longest);
    }
    return longnums;
}
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));