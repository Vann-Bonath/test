function largestLocal(grid: number[][]): number[][] {
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid.length - 2; j++) {
      for (let arrayGrid of grid) {
        for (let k = 0; k < 3; k++) {
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
