/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num){
    //  What we can do, is to create a variable let's call it factors and set it to 1
    //  We'll then loop in reverse from the provided number(num) to zero
    //  and in each iteration, multiply our variable factorial by the number in the iteration
    
    let factors = 1 // The variable factors

    //  We then create a reverse loop from the given number, subtracting one from the num
    //  in each iteration and multiplying the number by our factors variable
    for(let i = num; i >= 1; i--)
    {
        factors *= i;
    }
    
    
    return factors;
  }
  
  console.log(factorialize(20));