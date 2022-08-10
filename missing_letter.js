//  Missing letters

//  Find the missing letter in the passed letter range and return it.

//  If all letters are present in the range, return undefined.



function fearNotLetter(str)
{
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let strList = str.split('');
    let start = strList[0];
    let end = strList[strList.length-1];
    let extract = alphabet.slice(alphabet.indexOf(start),alphabet.indexOf(end)+1);
    if(extract == strList)
    {
        return undefined;
    }
    else
    {
        for(letter of extract)
        {
            if(strList.includes(letter) == false)
            {
                return letter;
            }
        }
    }
}

console.log(fearNotLetter("abce"));