/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/


//                              SOLUTION
//  We can use the splice method to modify the second array,after copying it, since it should remain the same, then use the spread operator
//  to copy the first array to the second array copy, in the third argument of the splice() method
function frankenSplice(arr1, arr2, n) {
  let result = [...arr2];
  result.splice(n,0,...arr1);

  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));