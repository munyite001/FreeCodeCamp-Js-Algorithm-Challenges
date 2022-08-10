let arr = ['abc','abcbasdd','bacccsdasdas']    // should return 'bc' since 'b' and 'c' since they are common inall strings

function gemstones (ar)
{
    let newarr = ar.join("").split("");
    let letters = []
    for(let i = 0; i < newarr.length; i++)
    {
        let value = newarr[i]
        if(letters.includes(value) == false)
        {
            letters.push(value);
        }
    }
    let common = []
    for(let i = 0; i < letters.length; i++)
    {
        if(arr.every(word => { return word.includes(letters[i]) == true}))
        {
            common.push(letters[i]);
        }
    }

    let total = common.length;
    return total;
}

console.log(gemstones(arr));