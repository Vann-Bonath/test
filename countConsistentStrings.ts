function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedText = allowed.split("");
  let consistentWordCount: number = 0;
  let i: number = 0;
  for (let word of words) {
    for(){
        if (word.includes(allowedText[i])) {
            consistentWordCount++;
          }
    }
    
  }
  return consistentWordCount;
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
