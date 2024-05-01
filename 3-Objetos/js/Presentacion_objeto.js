const nombre = 'Monitor 20"'
const precio = 300
const disponible = true

//Object literal
const producto = 
{
    Nombre: nombre,
    Precio: 100,
    Disponible: disponible,
    Stock: 5,
    Tienda: "Falabella"
}

//Agregar var a Object
let descuento = .3
producto.precioDescuento = producto.precio*descuento
console.log(producto);

//Eliminar algo del objeto
console.log(delete producto.tienda);
delete producto.stock
console.log(producto);

//Extraer algo del objeto

const {Tienda, Nombre,Precio} = producto
console.log(Tienda.charAt(0));
console.log(Nombre);
console.log(Precio);