function scoreOfString(s: string): number {
  let result: number = 0;
  for (let i: number = 0; i < s.length - 1; i++) {
    result = result + Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return result;
}

console.log(scoreOfString("zaz"));
