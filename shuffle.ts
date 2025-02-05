function shuffle(nums: number[], n: number): number[] {
  const middle = Math.ceil(nums.length / 2);
  const firstHalf = nums.slice(0, middle);
  const secondHalf = nums.slice(middle);
  let shuffledArray: number[] = [];
  for (let i = 0; i < n; i++) {
    shuffledArray.push(firstHalf[i], secondHalf[i]);
  }

  return shuffledArray;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
