function convertDateToBinary(date) {
    var convertedDateToArray = date.split("-");
    var convertDate = [];
    var binaryDate = [];
    var result = "";
    for (var i = 0; i < convertedDateToArray.length; i++) {
        convertDate.push(Number(convertedDateToArray[i]));
        binaryDate.push(convertDate[i].toString(2));
    }
    result = binaryDate.join("-");
    return result;
}
console.log(convertDateToBinary("2080-02-29"));
