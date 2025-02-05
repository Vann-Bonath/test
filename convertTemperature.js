function convertTemperature(celsius) {
    var convertToKelvin = celsius + 273.15;
    var convertToFahrenheit = celsius * 1.8 + 32.0;
    var result = [];
    console.log(convertToKelvin);
    console.log(convertToFahrenheit);
    result[0] = convertToKelvin;
    result[1] = convertToFahrenheit;
    return result;
}
console.log(convertTemperature(36.5));
