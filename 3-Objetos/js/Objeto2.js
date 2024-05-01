const producto =
{
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true,
    informacion:{
        medidas:
        {
            peso: '1kg',
            medida: '1 m'
        },

        fabricacion:
        {
            pais: 'China'
        } 
    }

}

//Accediendo a los objetos dentro de un objeto
//Creando variables con la info del objeto
const {nombre, precio, informacion:{medidas}, informacion} = producto
/*
console.log(medidas);
console.log(informacion);
*/

//Definir objeto estricto //Congelar objeto
Object.freeze(producto)

//Sellar objeto //Se pueden modificar atributos
Object.seal(producto)

//¿Está sellado?
console.log(Object.isSealed(producto));