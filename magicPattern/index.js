/*
Question: 
Combine ingredients in a specific order, any of which may be repeated

As an example, consider the following  
(A,B,C,D) in 11 steps: A, B, A, B, C, A, B, A, B, C, E 

Encode the string above using only 6 characters: A,B,*,C,*,E

Implement function that takes as input an un-encoded potion and returns the 
minimum number of characters required to encode


Encoding format: introduce * to indicate "repeat from beginning". Example. Input-{a,b,a,b,c,a,b,a,b,c,d} can be written as {a , b, * ,c, * , d}.
*/


function pattern (arr) {
    let s = '';
    for (let i =0; i< arr.length ; i++) {
        const elem = arr[i];
        if(elem === '*') {
            s += s;
        } else {
            s += elem;
        }
    }
    return s;
}

// console.log(pattern(['A', 'B', '*', 'C', '*', 'D']));

function magicencoder(str = '') {
    let index = 1;
    let arr = [str[0]];

    while(index <= str.length) {
        const pat = pattern([...arr, '*']);
        const next = str.slice(0, (2*index));
        if(pat !== next) {
            arr.push(str[index]);
            index += 1;
        } else {
            arr.push('*');
            index = 2 * index;
        }
    }
    console.log(arr.slice(0, arr.length -1));
    return arr.length -1;
}

console.log(magicencoder('ABCDABCE'));
console.log(magicencoder('ABCABCE'));

    // magicNumber(4);
