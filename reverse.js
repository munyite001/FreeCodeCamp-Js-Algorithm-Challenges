let reverseArray = (arr) => 
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        newArr.unshift(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));

let reverseArrayInPlace = (arr) => 
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        newArr.unshift(arr[i]);
    }
    arr = newArr;
    return arr;
}

let myArr = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArrayInPlace(myArr));