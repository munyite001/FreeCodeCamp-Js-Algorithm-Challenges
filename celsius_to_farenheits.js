/*
Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent
to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) 
{
    //  All we have to do is set the farenheit variable equal to (celsius * (9/5)) + 32
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
  }
  
  convertToF(30);