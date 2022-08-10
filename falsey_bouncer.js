/*
Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/


//              SOLUTION
//  First we convert each element into boolean(true/false). Then we check if the element is true,
//  We push it to the empty result array, then we return the result

function bouncer(arr) {
    let result = [];
    for(let element of arr)
    {
        if(Boolean(element))
        {
            result.push(element);
        }
    }

    return result;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));