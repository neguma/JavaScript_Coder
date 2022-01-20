let basic = 4550;
let premium = 5675;
let excelsior = 7890;

class Persona {
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}
function message(message) {
  message = parseFloat(alert(`El precio final es de $${message}.`));
}

function days(days) {
  days = parseInt(prompt("Ingrese la cantidad de días:"));
}

function transaction() {
  //////Registro de cliente//////
  let name = prompt("Ingrese su nombre:");
  let age = parseInt(prompt("Ingrese su edad:"));
  //////Verificación de edad + selección de paquete//////
  if (age >= 18) {
    let phone = parseInt(prompt("Ingrese su número de teléfono:"));
    const client = new Persona(name, age, phone);
    //////Selección de paquete//////
    function packageSelect(package, days) {
      package = prompt(
        `Bienvenido a la Estancia Clavero, ${client.name}. Tiene a su disposición 3 paquetes para contratar:\n\nBasic - $4550/dia \nPremium - $5675/dia\nExcelsior - $7890/dia\n\nPara continuar, ingrese uno de los 3 paquetes mencionados (en minúsculas):`
      );
      switch (package) {
        case "basic":
          days();
          total = parseInt(basic * days);
          message(`${total}`);
          break;
        case "premium":
          days();
          total = parseInt(premium * days);
          message(`${total}`);
          break;
        case "excelsior":
          days();
          total = parseInt(excelsior * days);
          message(`${total}`);
          break;
      }
      //////Descuentos//////
      discount = prompt(
        "Si alguna vez se hospedó con nosotros, recuerde que tiene descuentos disponibles según el paquete que haya contratado en aquel momento:\n\nBasic - 15% OFF\nPremium - 35% OFF\nExcelsior - 50% OFF\n\nPor favor ingrese el paquete que contrató previamente (en minúsculas):"
      );
      if (discount === "basic") {
        finalPrice = total - (total * 15) / 100;
        return message(`${finalPrice}`);
      } else if (discount === "premium") {
        finalPrice = total - (total * 35) / 100;
        return message(`${finalPrice}`);
      } else if (discount === "excelsior") {
        finalPrice = total - (total * 50) / 100;
        return message(`${finalPrice}`);
      }
      //////Confirmación de la transacción//////
      alert(
        `Gracias por su compra. Nos estaremos comunicando a su teléfono ${client.phone} en breve!`
      );
    }
    packageSelect();
  } else {
    alert(
      "Debes ser mayor de edad para poder utilizar nuestros servicios, gracias"
    );
  }
}

transaction();
