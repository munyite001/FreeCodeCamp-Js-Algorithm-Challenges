//  Sum All Odd Fibonacci Numbers

//  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//  The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let fib = [1,1];
    let current = 0;
    let previous = 0;
    let temp = 0;
    for(let i = 1; current+previous < num; i++)
    {
        current = fib[i];
        previous = fib[i-1];
        temp = current+previous;
        fib.push(temp);

    }
    let total = 0;
    for(let i = 0; i < fib.length; i++)
    {
        if(fib[i] <= num && fib[i] % 2 != 0)
        {
            total += fib[i];
        }
    }

    return total;
  }
  
  console.log(sumFibs(1));