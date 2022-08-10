let myArr = [[11,2,4],[4,5,6],[10,8,-12]];
function diagonal(arr)
{
    let elements = []
    let total = 0; 
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr[i].length; j++)
        {
            elements.push(arr[i][j]);
        }
    }
    let n = 0
    while(n < elements.length)
    {
        total += elements[n];
        n += arr.length+1;
    }

    return total;
}


function rev(arr)
{
    let bigarr = []
    for(let i = arr.length-1; i >=0; i--)
    {
        let smallarr = [];
        for(let j = arr[i].length-1; j >= 0; j--)
        {
            smallarr.push(arr[i][j])
        }
        bigarr.unshift(smallarr);
    }

    return bigarr;
}

function diagonal_diff(arr)
{
    let diag1 = diagonal(arr);
    let diag2 = diagonal(rev(arr));


    return Math.abs(diag1 - diag2);
}

console.log(diagonal_diff(myArr));