function lowToHigh(a, b) {
  return a - b;
}

function highToLow(a, b) {
  return b - a;
}

function arraySort() {
  var array = [1, 4, 2, 9, 11, 44, 111, 7, 4];
  var message = `Array principal: ${array} \n`;
  message;
  message = message + `De mayor a menor: ${array.sort(highToLow)} \n`;
  message = message + `De mayor a menor: ${array.sort(lowToHigh)} \n`;
  alert(message);
}

arraySort();
