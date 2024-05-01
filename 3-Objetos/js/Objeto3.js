const producto =
{
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true,
    infoProducto: function(){
        console.log(`El nombre del producto es: ${this.nombre}`);
    },
    informacion:{
        medidas:
        {
            peso: '1kg',
            medida: '1 m'
        },

        fabricacion:
        {
            pais: 'China'
        } ,
        mostrarInfo: function(){
            console.log(`El producto: es de origen: ${this.fabricacion.pais}`);
        }
    }

}

const calidad =
{
    frecuencia: '144 hz',
    calidadProducto: 'Premium'
}
const frecuencia = calidad.frecuencia
//Unir dos objetos en uno
const unionProducto = Object.assign(producto,calidad)
 //console.log(unionProducto);

mostrarObjeto=function(){
    console.log(`El producto tiene una calidad: ${calidad.calidadProducto}`)
}
mostrarObjeto()
producto.informacion.mostrarInfo()
producto.infoProducto()