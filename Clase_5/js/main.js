/*const objeto = new Object(); <--- el objeto es un Constructor*/

/*Objeto literal*/

/*const personaje = {
  nombre: "Leonard",
  edad: 41,
  ci: 173,
};

console.log(personaje["edad"]);
*/

/*Funcion constructor*/
function Persona(first, last, age, iq, nicknames) {
  this.nombre = {
    first: first,
    last: last,
  };
  this.edad = age;
  this.ci = iq;
  this.apodos = nicknames;
}
