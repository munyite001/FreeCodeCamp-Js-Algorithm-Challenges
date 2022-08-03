//  Steamroller

//  Flatten a nested array. You must account for varying levels of nesting.

/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(arr)
{
  let flat = [];
  for(let element of arr)
  {
    if(Array.isArray(element))
    {
      flat.push(...steamrollArray(element));
    }
    else
    {
      flat.push(element);
    }
  }
  return flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));