//const numeros = [1,2,3,4,5];
 //const [ primero, segundo, tercero ] = numeros;

 // console.log(primero,segundo);


const carrito = [
    {nombre: 'monitor', precio: 500},
    {nombre: 'computador', precio: 1000},
    {nombre: 'silla', precio: 300},
];
/*
for (let i = 0 ; i < carrito.length; i++){
console.log(carrito[i].precio)
console.log()
}  */

//carrito.forEach(function (producto){
//console.log(`${producto.nombre} - Precio: ${producto.precio}`);
//});


const arrayCarrito = carrito.map(function (producto)
{
    return `${producto.nombre} - Precio: ${producto.precio}`;
} );

console.log(arrayCarrito)