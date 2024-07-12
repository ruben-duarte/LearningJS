// Convert celsius to farenheit

function convertCelsiusToFarenheit (celsius) {
  let farenheit = ( celsius * 1.8 ) + 32 ;
  return `${celsius}°C equals ${farenheit.toFixed(4)}°F`;
}

let example = convertCelsiusToFarenheit(14);
console.log(example);


function FarenheitTOCelsius (farenheit) {
  let celsius = ( farenheit - 32 ) / 1.8 ;
  return `${farenheit.toFixed(4)}°F equals ${celsius.toFixed(4)}°C`;
}

let example2 = FarenheitTOCelsius(57.2);
console.log(example2);
