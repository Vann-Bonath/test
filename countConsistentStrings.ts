function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedSet = new Set(allowed); // Use a Set for quick lookup
  console.log(allowedSet);
  let consistentWordCount: number = 0;

  for (let j = 0; j < words.length; j++) {
    let word = words[j].split(""); // Corrected index

    // Check if all characters in the word are allowed
    if (word.every((char) => allowedSet.has(char))) {
      consistentWordCount++;
    }
  }

  return consistentWordCount;
}

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
