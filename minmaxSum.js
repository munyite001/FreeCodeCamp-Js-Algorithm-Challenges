/*
Given five positive integers, 
find the minimum and maximum values 
that can be calculated by summing exactly 
four of the five integers. 
Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.
*/




function miniMaxSum(arr) {
    // Write your code here
    let newarr = arr.sort((a,b) => a-b);
    let total = 0
    for(let i = 0; i < newarr.length; i++)
    {
        total += arr[i];
    }
    let minsum = total - newarr[newarr.length-1];
    let maxsum = total - newarr[0];
    
    console.log(`${minsum} ${maxsum}`);

}
