const producto =
{
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true
}

function Producto(marca, precio){
    this.marca = marca;
    this.precio = precio;
    this.disponible = true;
}
const motox = new Producto('motorola', '120990')
console.log(motox)