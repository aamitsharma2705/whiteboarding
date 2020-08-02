// get continuos matrix
// ex:
// matrix(4);

// [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

function matrix(n, arr = [], start = 1) {
    if (arr.length === n) {
        return arr;
    }
    let sub = []; 
    let i = start;
    for(i; i < start + n; i++) {
        sub.push(i);
    }
    arr.push(sub);
    return matrix(n, arr, i);
}
matrix(4);