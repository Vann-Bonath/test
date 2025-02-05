function defangIPaddr(address: string): string {
  const result = address.split(".").join("[.]");
  return result;
}

defangIPaddr("1.1.1.1");
