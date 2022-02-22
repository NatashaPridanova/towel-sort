// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sorted = [];
    if (matrix === undefined) return sorted;
    for (let i = 0; i < matrix.length; i++) {
        sorted = sorted.concat(i % 2 === 0 ? matrix[i].sort((a, b) => { return a - b; }) :
            matrix[i].sort((a, b) => { return b - a; }));
    }
    return sorted;
}