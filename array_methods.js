//  REDUCE

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

//  MAP
function map(arr,transform)
{
    let mapped = [];
    for(let element of arr)
    {
        mapped.push(transform(element));
    }

    console.log("\n Displaying Scripts with Right to Left Direction \n");
    return mapped;
}

//  FILTER
function filter(arr,test)
{
    let passed = [];
    for(let element of arr)
    {
        if(test(element))
        {
            passed.push(element);
        }
    }

    return passed;
}