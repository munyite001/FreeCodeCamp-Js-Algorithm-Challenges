//  Binary Agents

//  Return an English translated sentence of the passed binary string.

//  The binary string will be space separated.

/*
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!
*/

function binaryAgent(str){
    let strList = str.split(' ');
    let numlist = [];
    for(let i = 0; i < strList.length; i++)
    {
      let temp = [];
      for(let j = strList[i].length-1; j >= 0; j--)
      {
        temp.push(parseInt(strList[i][j]));
      }
      numlist.push(temp);
    }
    let binList = [];
    for(let i = 0; i < numlist.length; i++)
    {
      let sum = 0;
      for(let j = 0; j < numlist[i].length; j++)
      {
          sum += (numlist[i][j] * (2**j));
      }
      binList.push(sum);
    }
    let word = [];
    for(let bin of binList)
    {
      word.push(String.fromCharCode(bin));
    }

    return word.join('');
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));