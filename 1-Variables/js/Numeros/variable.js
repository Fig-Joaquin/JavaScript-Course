const hola = "hola desde la consola" 
hola

// no se especifica el tipo de variable. Se puede crear sin especificacion
var edad
var año

// tenemos var, let y const
let nombre = 'joaquin',
    apellido = 'sanchez';

// iniciar multiples variables
variable = 20
año = 22

// mostrar en pantalla
console.log(nombre,apellido)
console.log(variable,año)
variable = 'creando un string'
console.log(variable)

// creando una constante
const constante = 3;

// Creando STRING
let cadena = 'Cadena uno'
const cadena2 = String('Cadena dos')
var cadena3 = new String('Cadena tres') // objeto tipo string
console.log(cadena)
console.log(cadena2.length) // largo de la cadena 2
console.log(cadena3)

console.log(cadena.indexOf('uno')) // En que posicion esta la palabra
console.log(cadena.includes('dos')) // existe la la palabra en el string

// concatenar dos string
console.log(cadena.concat(' ',cadena2))
console.log(cadena2.concat(' concatenando este texto en la cadena 2'))

console.log(`esta ${cadena} se está concatenando la ${cadena3}`)

// Eliminar espacios
let correo = '           joaquinignacio2000       '
console.log(correo)
console.log(correo.trimStart())
console.log(correo.trimEnd())
console.log(correo.trimStart().trimEnd()) // Tambien se puede usar el correo.Trim();