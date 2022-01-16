alert(`Bienvenido al simulador de PaintShop®`);

const dataClient = () => {
  let name = prompt("Ingresa tu nombre");
  let mail = prompt("Ingresa tu mail");
  let client = { name, mail };
  return client;
};

let client = dataClient();

let width = parseFloat(prompt("Ingrese el ancho de su pared"));
let height = parseFloat(prompt("Ingrese el alto de su pared"));

const multiply = (width, height) => {
  let surface = width * height;
  alert(`La superficie es de ${surface}m2`);
  return surface;
};

let surfaceM2 = multiply(width, height);

const qtyPaint = (surface) => {
  if (surface <= 19) {
    alert(`Necesitas 1 balde de 25kg, ${client.name}`);
  } else if (surface >= 20 && surface <= 38) {
    alert(`Necesitas 2 baldes de 25kg, ${client.name}`);
  } else if (surface >= 39 && surface <= 58) {
    alert(`Necesitas 3 balde de 25kg, ${client.name}`);
  } else {
    alert(
      `Necesitas al menos 4 baldes de 25kg, si gustas un asesor de puede comunicar con vos ${client.name}`
    );
  }
};

qtyPaint(surfaceM2);
