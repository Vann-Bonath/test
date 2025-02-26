function romanToInt(s: string): number {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const ArrayOfStringS = s.split("");
  let sum = 0;
  for (let i = 0; i < ArrayOfStringS.length; i++) {
    const currentVal = romanMap[ArrayOfStringS[i]];
    const nextVal = romanMap[ArrayOfStringS[i + 1]] || 0;
    let temporaryValue = 0;

    if (currentVal < nextVal) {
      temporaryValue = Math.abs(currentVal - nextVal);
      i = i + 1;
    } else {
      temporaryValue = currentVal;
    }
    sum = sum + temporaryValue;
  }

  return sum;
}

console.log(romanToInt("XVMMMMMM"));
