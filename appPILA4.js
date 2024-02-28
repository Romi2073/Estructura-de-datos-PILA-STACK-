/*4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de
 identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los
  contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos 
  a su respectivo lugar.*/ 

class Almacen {
    constructor() {
      this.pilaContenedores = [];
    }
  
    apilarContenedor(contenedor) {
      this.pilaContenedores.push(contenedor);
      console.log(`Contenedor ${contenedor} apilado correctamente.`);
    }
  
    retirarContenedor(identificacion) {
      const indiceContenedor = this.pilaContenedores.indexOf(identificacion);
  
      if (indiceContenedor !== -1) {
        console.log(`Contenedor ${identificacion} retirado correctamente.`);
        this.pilaContenedores.splice(indiceContenedor, 1);
      } else {
        console.log(`Contenedor ${identificacion} no encontrado en el almacén.`);
      }
    }
  }
  
  // Ejemplo de uso
  const almacen = new Almacen();
  
  almacen.apilarContenedor(1);
  almacen.apilarContenedor(2);
  almacen.apilarContenedor(3);
  
  almacen.retirarContenedor(2);
  