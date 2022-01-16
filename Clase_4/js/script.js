let programa = prompt(
  "Este programa le mostrará todos los números impares que se encuentren entre un número inicial, y un número final que usted elija manualmente. Iniciar? Ingrese si/no (minúsculas)"
);

while (programa != "no") {
  switch (programa) {
    case "si":
      let n1 = parseInt(prompt("Ingrese un número inicial:"));
      let n2 = parseInt(prompt("Ingrese un número final:"));
      while (n1 < n2) {
        n1++;
        if (n1 % 2 != 0) {
          alert("El número" + " " + n1 + " " + "es impar.");
        }
      }
  }
  programa = prompt("Reiniciar? Ingrese si/no (minúsculas)");
}
