//  Function reduce with 3 parameters 
let reduce = (array,combine,start = 0) => 
{
    let current = start;
    for(let element of array)
    {
        current = combine(current,element);
    }

    return current;
}

console.log(reduce([1,2,3,4,5],(a,b) => a+b,0));