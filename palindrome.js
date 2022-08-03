//  PALINDROME CHECKER
function palindrome(str) 
{
  let stringArr = str.toLowerCase().split('');
let myRegex = /[a-zA-Z0-9]/;
let modArr = [];
for(let element of stringArr)
{
    if(myRegex.test(element) == true)
    {
        modArr.push(element);
    }
}
let start = '';
let end = '';
let n = modArr.length;
for(let i = 0; i < modArr.length; i++)
{
    n -= 1;
    start += modArr[i];
    end += modArr[n];
    if(start != end)
    {
         return false;
    }

}
return true;
}

palindrome("eye");