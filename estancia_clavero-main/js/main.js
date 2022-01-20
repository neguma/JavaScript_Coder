let basic = 4550;
let premium = 5675;
let excelsior = 7890;

/*var name = prompt("Ingrese su nombre:");
var age = parseInt(prompt("Ingrese su edad:"));
var phone = parseInt(prompt("Ingrese su número de teléfono:"));*/

class Persona {
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}

const personal = new Persona(
  prompt("Ingrese su nombre:"),
  parseInt(prompt("Ingrese su edad:")),
  parseInt(prompt("Ingrese su número de teléfono:"))
);

if(personal.age < 18){
  break
}

function packageSelect(package, days) {
  package = prompt(
    `Bienvenido a la Estancia Clavero, ${personal.name}. Tiene a su disposición 3 paquetes para contratar: basic ($4550/dia), premium ($5675/dia) y excelsior ($7890). Para continuar, ingrese uno de los 3 paquetes mencionados:`
  );
  switch (package) {
    case "basic":
      days = parseInt(prompt("Ingrese la cantidad de días:"));
      totalBasic = parseInt(basic * days);
      alert("El precio final sería de " + "$" + totalBasic + ".");
      discount = prompt("¿Desea aplicar 15% OFF de su estadía anterior?");
      if (discount == "si") {
        total = parseInt(totalBasic - (totalBasic * 15) / 100);
        alert("El precio final es de" + " " + "$" + total + ".");
        break;
      } else {
        break;
      }

    case "premium":
      days = parseInt(prompt("Ingrese la cantidad de días:"));
      totalPremium = parseInt(premium * days);
      alert("El precio final sería de " + "$" + totalPremium + ".");
      discount = prompt("¿Desea aplicar 15% OFF de su estadía anterior?");
      if (discount == "si") {
        total = parseInt(totalPremium - (totalPremium * 15) / 100);
        alert("El precio final es de" + " " + "$" + total + ".");
        break;
      } else {
        break;
      }

    case "excelsior":
      days = parseInt(prompt("Ingrese la cantidad de días:"));
      totalExcelsior = parseInt(excelsior * days);
      alert("El precio final sería de " + "$" + totalExcelsior + ".");
      discount = prompt("¿Desea aplicar 15% OFF de su estadía anterior?");
      if (discount == "si") {
        total = parseInt(totalExcelsior - (totalExcelsior * 15) / 100);
        alert("El precio final es de" + " " + "$" + total + ".");
        break;
      } else {
        break;
      }
  }
}

packageSelect();
alert(
  `Gracias por su compra. Nos estaremos comunicando a su teléfono ${personal.phone} en breve!`
);
