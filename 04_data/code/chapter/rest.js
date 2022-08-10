function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result){
            result = number;
        }
    }

    return result;
}

console.log(max(1,2,3));
console.log(max(9,2,4,7,9));

let words = ['never', 'fully'];
console.log('will',...words,'understand');

console.log(Math.cos(60));

console.log(Math.floor(Math.random() * 100));