// get spiral matrix
// ex:
// matrix(4);

// [ [ 1, 2, 3, 4 ],
// [ 12, 13, 14, 5 ],
// [ 11, 16, 15, 6 ],
// [ 10, 9, 8, 7 ] ]

// approach taken
// left --> right till elem is defined or col === n
// top --> down till elem is defined or row === n
// right --> left till elem is defined or col === 0
// down --> top  till elem is defined or row === 0

function matrix (n, arr = [], direction = 1, row = 0, col = 0, count = 1) {
    if (count > n * n) {
        return arr;
    }

    if (arr.length === 0) {
        arr = new Array(n).fill(0).map(elem => new Array(n));
    }
    if (!arr[row][col]) {
        arr[row][col] = count;
    }
    let nRow = row;
    let nCol = col;
    let nDir = direction;
    if (direction === 1) {
        // left to right
        if (col + 1 === n || arr[row][col + 1]) {
            nRow = row + 1;
            nDir = 2;          
        } else {
            nCol = col + 1;
        }
    } else if (direction === 2){
        // top to down
        if (row + 1 === n || arr[row + 1][col]) {
            nCol = col - 1;
            nDir = 3;
        } else {
            nRow = row + 1;
        }
    } else if (direction === 3) {
        // right to left
        if (col === 0 || arr[row][col - 1]) {
            nRow = row - 1;
            nDir = 4
        } else {
            nCol = col - 1;
        }
    } else if (direction === 4) {
        // down to top
        if (row - 1 === 0 || arr[row -1][col]) {
            nCol = col + 1;
            nDir = 1
        } else {
            nRow = row - 1;
        }
    }
    return matrix(n, arr, nDir, nRow, nCol, count + 1);
}