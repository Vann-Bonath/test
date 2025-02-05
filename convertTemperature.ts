function convertTemperature(celsius: number): number[] {
  const convertToKelvin = celsius + 273.15;
  const convertToFahrenheit = celsius * 1.8 + 32.0;
  const result: number[] = [];

  result[0] = convertToKelvin;
  result[1] = convertToFahrenheit;

  return result;
}

console.log(convertTemperature(36.5));
