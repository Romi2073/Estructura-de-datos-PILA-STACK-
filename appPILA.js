/*1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].*/

//los números son 0, 1, 2, 3

class Stack {
    // inicialización de atributos mediante el constructor
    constructor(stack, number) {
        this.stack = stack;
        this.number = number;
    }

    push(data) {
        this.stack.push(data);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    getSize() {
        return this.stack.length;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    returnStackWithLength() {
        const newStack = [];

        for (let i = 0; i < this.number; i++) {
            newStack.push(this.stack[i]);
        }

        return newStack;
    }
}

// Ejemplo de uso
const myStack = new Stack(["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melon"], 4);
console.log(myStack.returnStackWithLength());


