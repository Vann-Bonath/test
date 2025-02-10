function findWordsContaining(words: string[], x: string): number[] {
  let letters: string = "";
  let indexOfWordContainX: number[] = [];
  for (let i = 0; i < words.length; i++) {
    letters = words[i];
    for (let j = 0; j < letters.length; j++) {
      let letter: string = "";
      letter = letters[j];
      if (letter === x) {
        indexOfWordContainX.push(i);
        break;
      }
    }
  }

  return indexOfWordContainX;
}
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
