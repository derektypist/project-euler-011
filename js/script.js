// Set Up Variable
let txt = "";

/*
    Function to Return the Greatest Product of four adjacent numbers
    (Vertically, Horizontally or Diagonally)
*/
function largestGridProduct(arr) {
    let maxProduct = 0;
    let currProduct = 0;
    function maxProductChecker(n) {
        if (n>maxProduct) return maxProduct = n;
    }

    // Loop Rows
    for (let r=0;r<arr.length;r++) {
        // Loop Columns
        for (let c=0;c<arr[r].length;c++) {
            const limit = arr[r].length - 3;

            // Horizontal (Right)
            if (c<limit) {
                currProduct = arr[r][c] * arr[r][c+1] * arr[r][c+2] * arr[r][c+3];
                maxProductChecker(currProduct);
            }

            // Vertical (Down)
            if (r<limit) {
                currProduct = arr[r][c] * arr[r+1][c] * arr[r+2][c] * arr[r+3][c];
                maxProductChecker(currProduct);
            }

            // Diagonal 1
            if (c<limit && r<limit) {
                currProduct = arr[r][c] * arr[r+1][c+1] * arr[r+2][c+2] * arr[r+3][c+3];
                maxProductChecker(currProduct);
            }

            // Diagonal 2
            if (c>3 && r<limit) {
                currProduct = arr[r][c] * arr[r+1][c-1] * arr[r+2][c-2] * arr[r+3][c-3];
                maxProductChecker(currProduct);
            }
        }
    }
    return maxProduct;
}