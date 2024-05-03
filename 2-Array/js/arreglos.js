const num = [1,2,3,4,5];
const meses = ['enero','febrero','marzo']

const carrito = [];

const producto = {
    nombre: "monitor gamer",
    precio: 400
}
const producto2 = {
    nombre: "silla gamer",
    precio: 500
}


// * Operador Push
// Agrega al final de la lista un producto o un elemento.
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto);

console.log(carrito)

// ! Pruebas con carrito
//? Elimina al primero
carrito.shift();
console.log(carrito)
//? Agrega al primero
carrito.unshift(producto);
console.log(carrito)



// ! Prueba push con meses
// Forma declarativa.
meses.push('abril');
console.log(meses);

console.table(carrito);

// * Operador Spread 
// Forma imperativa.
// ...elemento.
// ? De primer orden
const mesesActualizado = [...meses, 'mayo'];
console.log(mesesActualizado);
// ? De último orden
const mesesActualizado2 = ["diciembre", ...meses];
console.log(mesesActualizado2);

// * Operador shift
// Elimina al primer elemento.
mesesActualizado.shift();
console.log(mesesActualizado);
// * Operador unshift
// Forma un nuevo array y agrega un elemento al inicio en la lista.
mesesActualizado2.unshift('octubre');
console.log(mesesActualizado2);

// ! ITERADORES !  //

// * Operador filter
// Busqueda de un elemento en la lista.
const diciembre = mesesActualizado2.filter((mes) => mes == 'diciembre');
console.log(diciembre);

// * Operador map
// Sirve para añadir un elemento en el array.
// Crea un nuevo arreglo.
const enero = mesesActualizado2.map((mes) => "El mes es: " + mes);
console.log(enero);


console.log(mesesActualizado2)

// * Operador pop
// Elimina el último de la lista.

mesesActualizado2.pop();
console.log(mesesActualizado2)

// * Operador splice
console.log(mesesActualizado)
mesesActualizado.unshift('enero');
console.log(mesesActualizado)

// Elimina los dos primeros elementos. Según sean los valores representados en la lista (x,y)
// x es el primer valor a eliminar.
// y es el último valor a eliminar.

mesesActualizado.splice(0,2)
console.log(mesesActualizado)

// * .ForEach
// No crea un nuevo arreglo.
// Ejemplo:

console.log(carrito)
carrito.pop();
carrito.forEach(function(productosCarrito) {
    console.log(` "Tenemos los siguientes productos:" + ${productosCarrito.nombre}`)
} )

