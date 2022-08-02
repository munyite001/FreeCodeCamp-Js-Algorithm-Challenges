//Pig Latin

//Pig Latin is a way of altering English Words. The rules are as follows:

//If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//If a word begins with a vowel, just add way at the end.

/*
translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/

function translatePigLatin(str)
{
  let vowels = ['a','e','i','o','u'];
  if(vowels.includes(str[0]) == true)
  {
    return str+'way';
  }
  let strList = str.split('');
  if(strList.some(letter => {return vowels.includes(letter)}) == false)
  {
  return str+'ay'
  }
else
{
  let modstr = (lst) => 
{
    let temp = lst[0];
    lst.shift();
    lst.push(temp);
    
    
    return lst; 
}
  while(vowels.includes(strList[0]) == false)
  {
    strList = modstr(strList)
  }

  let result = strList.join('')+'ay';
  return result;

}

}


console.log(translatePigLatin('rythm'));


