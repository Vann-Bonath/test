function numJewelsInStones(jewels: string, stones: string): number {
  let jewelsStoneIhave: number = 0;
  const spitedStringJewels = jewels.split("");
  const spitedStringStones = stones.split("");

  for (let i = 0; i < spitedStringStones.length; i++) {
    for (let j = 0; j < spitedStringJewels.length; j++) {
      if (spitedStringStones[i] === spitedStringJewels[j]) {
        jewelsStoneIhave++;
      }
    }
  }
  return jewelsStoneIhave;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
