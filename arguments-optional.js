//  Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//  Calling this returned function with a single argument will then return the sum:

function addTogether(...numbers)
{
        // Looping to make sure that the input given is a number
        for(let i = 0; i < numbers.length; i++)
        {
            if(typeof(numbers[i]) !== 'number')
            {
                return undefined;
            }
        }

        if(numbers.length < 2)
        {
            return func = (num) => 
            {
                if(typeof(num) === 'number')
                {
                    return numbers[0] + num;            
                }
            }
        }

        else if(numbers.length == 2)
        {   
            return numbers[0] + numbers[1];
        }
        
        else
        {
            return undefined;
        }
    
}
  
  console.log(addTogether(5)(7));
