function iseven(n)
{
    if(n == -1)
    {
        return false;
    }
    else if(n == -2)
    {
        return true;
    }
    else
    {
       return iseven(n-2);
    }
}

console.log(iseven(75));