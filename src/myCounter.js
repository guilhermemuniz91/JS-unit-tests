/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

// const myCounter = () => {
//   var myArray = [];
//   for (var counter = 0; counter <= 3; counter += 1) {
//     myArray.push(counter);
//     for (var counter = 2; counter <= 3; counter += 1) {
//       myArray.push(counter);
//     }
//   }
//   return myArray;
// };

const myCounter = () => {
  var myArray = [];
  for (let index1 = 0; index1 <= 3; index1 += 1) {
    myArray.push(index1);
    for (let index2 = 2; index2 <= 3; index2 += 1) {
      myArray.push(index2);
    }
  }
  return myArray;
};

module.exports = myCounter;
