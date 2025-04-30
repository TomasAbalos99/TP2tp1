

import { 
    leerArchivoComoString, 
    escribirTextoEnArchivo, 
    transformarStringEnArrayDeNumeros, 
    transformarArrayDeNumerosAUnSoloString, 
    combinarDosArrays, 
    combinarNArrays 
  } from './funciones.js';
  import fs from 'fs';
  import assert from 'assert';
  
  console.log(transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', ' | '));
  console.log(transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ','));
  console.log(combinarDosArrays([1, 5, 10], [2, 3, 8, 11]));
  console.log(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]));
  

assert.deepStrictEqual(transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', ' | '), [123, 456, 789, 10]);
assert.strictEqual(transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ','), '123,456,789,10');
assert.deepStrictEqual(combinarDosArrays([1, 5, 10], [2, 3, 8, 11]), [1, 2, 3, 5, 8, 10, 11]);
assert.deepStrictEqual(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]), [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]);
console.log("Todas las pruebas pasaron exitosamente.");
