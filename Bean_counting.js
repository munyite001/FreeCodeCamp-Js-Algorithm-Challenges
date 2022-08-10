let countBs = (str,letter) => 
{
    
    return countChar(str,letter);
}

let countChar = (str, letter) => 
{
    let count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == letter)
        {
            count += 1;
        }
    }
    return count;
}

console.log(countBs('Hello world last mile','l'));