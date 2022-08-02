//  Spinal Tap Case
//  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
/*
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/

function spinalCase(str){
  let upRegex = str.match(/[A-Z]/g);
  let newStr = "";
  for(letter of str)
  {
    if(upRegex.includes(letter))
    {
      newStr += " "+letter
    }
    else
    {
      newStr += letter;
      newStr = newStr.trimStart();
    }
  }
let temp = newStr.split(/[^A-Za-z0-9]/);
let word = []
for(element of temp)
{
  if(element.length > 0)
  {
    word.push(element);
  }
}
let result = word.join("-")
return result.toLowerCase();  
}
  
console.log(spinalCase('This Is Spinal Tap'));