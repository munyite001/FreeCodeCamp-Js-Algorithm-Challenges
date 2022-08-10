function telephoneCheck(str) 
{
  let myRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?(\d{3})[\-\s]?(\d{4})$/gm;  
return myRegex.test(str);
}


telephoneCheck("555-555-5555");