// 4321324
// 3321233
// 2221222
// 1111111
// 2221222
// 3321233
// 4321234

function potion(n) {
    const len = 2 * n - 1;
    const arr = new Array(len).fill(0).map(() => new Array(len).fill(0));
    const mean = n - 1;
    let step = n;
    let rowStep = n;
    for (let i = 0; i < 2 * n - 1; i++) {
      step = rowStep;
      for (let j = 0; j < 2 * n - 1; j++) {
        arr[i][j] = step;
        if(j+ rowStep < n) {
          continue;
        }
        if (j < mean) {
          step--;
        } else {
          step++;
        }
      }
      if (i < mean) {
          rowStep--;
        } else {
          rowStep++;
        }
    }
    console.log(arr);
}

// potion(4);

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
  