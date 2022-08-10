//  Convert HTML Entities

//  Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

/*
& 	&amp;
< 	&lt;
> 	&gt;
" 	&quot;
'   &apos;
*/

function convertHTML(str)
{
    let strList = str.split('');
    for(let i = 0; i < strList.length; i++)
    {
        if(strList[i] == '&')
        {
            strList[i] = '&amp;';
        }
        else if(strList[i] == '<')
        {
            strList[i] = '&lt;';
        }
        else if(strList[i] == '>')
        {
            strList[i] = '&gt;';
        }
        else if(strList[i] == '"')
        {
            strList[i] = '&quot;';
        }
        else if(strList[i] == "'")
        {
            strList[i] = '&apos;';
        }
    }

    let result = strList.join('');

    return result;
}

console.log(convertHTML("Dolce & Gabbana"));