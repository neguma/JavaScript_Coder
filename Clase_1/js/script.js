let año = parseInt(prompt("Ingresá un año:"));

if (año % 4 == 0 && (!(año % 100 == 0) || año % 400 == 0)) {
  alert(año + " " + "es un año bisiesto.");
} else {
  alert(año + " " + "no es un año bisiesto.");
}
