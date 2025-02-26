function largestLocal(grid) {
    for (var i = 0; i < grid.length - 2; i++) {
        for (var j = 0; j < grid.length - 2; j++) {
            for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
                var arrayGrid = grid_1[_i];
                for (var k = 0; k < 3; k++) {
                    console.log(arrayGrid[k]);
                }
            }
        }
    }
    return [];
}
largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
]);
