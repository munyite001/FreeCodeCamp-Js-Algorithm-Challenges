/* 
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

*/

//              SOLUTION
//  we'll create two arrays, bigArr and smallArr. Then we'll create a loop that will increment 
//  by the stipulated size and in each iteration, we'll grab a slice of the main arr starting at index
//  position i to index position size plus i exclusive that's just so we can grab the number of elements equal to size
//  then we'll push the smallArr to the bigArr and reinitialize the smallArr back to empty
//  Then we'll return bigArr


function chunkArrayInGroups(arr, size) {
    let smallArr = [];
    let bigArr = [];
   for(let i = 0; i < arr.length; i+= size)
   {
    smallArr = arr.slice(i,size+i);
    bigArr.push(smallArr);
    smallArr = [];
   }
return bigArr;
}
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
