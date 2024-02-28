/*2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, 
y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún 
lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]*/

function reemplazar(pila, nuevo, viejo) {
    let encontrado = false;
  
    while (pila.length > 0) {
      const elemento = pila.pop();
  
      if (elemento === viejo && !encontrado) {
        pila.push(nuevo);
        encontrado = true;
      } else {
        pila.push(elemento);
      }
    }
  
    return pila.reverse();
  }
  
  const resultado = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
  console.log(resultado);
  
