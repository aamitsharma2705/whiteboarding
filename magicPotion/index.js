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

potion(4);
