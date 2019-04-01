
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');
//const kelvin = 294;
var celcius = kelvin - 273;// je prend la valeur de kelvin et soustrait 273
var fahrenheit = celcius * (9/5) + 32;//je prend la valeur de la variable celcius et mutliplie par 9/5 eme et j'addtionne32 au résultat



console.log(kelvin);
console.log(celcius);
console.log(Math.floor(fahrenheit));
