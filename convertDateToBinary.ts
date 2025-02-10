function convertDateToBinary(date: string): string {
  const convertedDateToArray = date.split("-");
  let convertDate: number[] = [];
  let binaryDate: string[] = [];
  let result: string = "";
  for (let i = 0; i < convertedDateToArray.length; i++) {
    convertDate.push(Number(convertedDateToArray[i]));
    binaryDate.push(convertDate[i].toString(2));
  }
  result = binaryDate.join("-");

  return result;
}

console.log(convertDateToBinary("2080-02-29"));
