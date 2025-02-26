function isPalindrome(x: number): boolean {
  let reverseString: number = parseInt(
    x.toString().split("").reverse().join(""),
    10
  );

  if (reverseString === x) {
    return true;
  }
  return false;
}

console.log(isPalindrome(122));
