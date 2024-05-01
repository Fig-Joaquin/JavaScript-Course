// Replace - slice - substring

const producto = 'Computador gamer'

console.log(producto)
// Reemplazar valor gamer por Gamer   //.replace
console.log(producto.replace('gamer', 'Gamer'))
// Cortar texto                       //.slice
console.log(producto.slice(0, 10))
console.log(producto.slice(11))
// Alternativa a Slice                //.substring
console.log(producto.substring(10,0))
// Seleccionar una letra              //.charAt()
let nombre = 'Joaquin' 
console.log(nombre.charAt(0))


// repetir la cadena de texto         //.repeat
const promocion = '50% de descuento '.repeat(2)
console.log(promocion)
// Dividir la cadena                  //.split
const jugando = "Estoy jugando al futbol"
const hobbie = 'Jugar, Leer, Dormir, Correr'
console.log(jugando.split(' '))
console.log(hobbie.split(','))


// Cambiar a mayúsculas y minúsculas
const casa = "Esta es una casa"
console.log(casa.toUpperCase()) // mayus
const correo = 'Correo@corre.com'
console.log(casa.toLowerCase()) // minus

//cambiar int a string
const precio = 500
console.log(precio)
console.log(precio.toString())
