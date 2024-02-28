/*3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen*/

class Viaje {
    constructor() {
        this.viaje = [];
    }

    push(data) {
        this.viaje.push(data);
    }

    pop() {
        return this.viaje.pop();
    }

    peek() {
        return this.viaje[this.viaje.length - 1];
    }

    size() {
        return this.viaje.length;
    }

    print() {
        console.log(this.viaje);
    }
}

function rutaIda() {

    const recorrido = new Viaje();

    recorrido.push("Pueblo Origen");
    recorrido.push("pueblo 1");
    recorrido.push("pueblo 2");
    recorrido.push("destino");


    console.log("Recorrido de ida: " + recorrido.viaje.join(" → "));
}


function rutaRegreso() {

    const destino = "Destino";
   

    regreso.push(destino);
    regreso.push("pueblo 2");
    regreso.push("pueblo 1");
    regreso.push("Pueblo Origen");

}

const destino = "Destino";
const regreso = new Viaje();
rutaIda(destino);
rutaRegreso();
console.log("Recorrido de vuelta: " + regreso.viaje.join(" → "));

