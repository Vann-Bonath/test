function findPermutationDifference(s: string, t: string): number {
  const arrayS: string[] = s.split("");
  const arrayT: string[] = t.split("");

  const arraySIndex: number[] = [];
  let isTequalToSIndex: number[] = [];

  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    arraySIndex.push(arrayS.indexOf(arrayS[i]));
    for (let j = 0; j < t.length; j++) {
      if (arrayS[i] === arrayT[j]) {
        isTequalToSIndex.push(arrayT.indexOf(arrayT[j]));
        break;
      }
    }
  }

  for (let i = 0; i < arraySIndex.length; i++) {
    result = result + Math.abs(arraySIndex[i] - isTequalToSIndex[i]);
  }

  return result;
}

console.log(findPermutationDifference("abcde", "edbac"));
