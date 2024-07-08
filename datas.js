
// //1 
// printMessage("Hola mundo")
// function printMessage(mensaje){
//     console.log(mensaje);
// }

// const funcionFlecha = (mensaje) => {
//     console.log(mensaje);
// }
// funcionFlecha("Hello World")

// //2
// // const createMultplication = (number1) =>{

// //     let multiplicacion = number1 * 2

// //     return multiplicacion

// // }
// const createMultplication = number1 => number1 *2
// console.log(createMultplication(10));

// //3
// const array = [ 1,2,3,4,5,6,7,8,9 ]

// const nuevoArray = array.map(createMultplication)
// // array.map
// console.log(nuevoArray);

//4
// const cervezasMasAlcoholicas = beers.filter(beer => beer.ibu > 50).map(beer => beer.name)
// console.log(cervezasMasAlcoholicas);

// const nombreYDescripcion = beers.map(beer =>({
//   name: beer.name,
//   description: beer.description
// } ))

// const mayor = beers.filter(beer => beer.abv > 6).map(beer => beer.name)
// console.log(mayor);
// // const cervezasMenosAmargas = beers.filter(beer => beer.)

//5 abv
// const cervezasMenosAmargas = beers.filter(beer => beer.abv < 6).map(beer => beer.name)
// console.log(cervezasMenosAmargas);

//6
// let cerveza = prompt("Cual es tu cerveza favorita?")
// const cervezas = (beers, cerveza) => {

//     beers.forEach(beer => {
//         if (beer.name == cerveza) {
//             return cerveza;
//         }
//     });
// }
// cervezas(beers, cerveza);

// //7
// let ibuAbuscar = parseInt(prompt("Cual es tu ibu favorita?"))
// // let buscarPorIbu = (beers,ibu) => {
// //     beers.forEach(beer => {
// //         if(beer.ibu == ibu){
// //             console.log(beer);
// //         }else console.log(`No hay cerveza con un ibu de valor ${ibu}` );
// //     });

// // }


let buscarPorIbu = (beers,ibu) => {
    let beerEncontrada = beers.find(beer => beer.ibu == ibu);
    if(beerEncontrada){
        console.log(beerEncontrada);
    }else console.log(`No hay cerveza con un ibu de valor ${ibu}` );
}

// // let buscarPorIbus = (beers,ibu) => beers.find(beer => beer.ibu == ibu)
// // if(buscarPorIbus(beers,ibuAbuscar)){
// //     console.log(buscarPorIbus(beers,ibuAbuscar));
// // }else console.log(`No hay cerveza con un ibu de valor ${ibuAbuscar}` );

// buscarPorIbu(beers,ibuAbuscar)
// buscarPorIbus(beers,ibuAbuscar)

// //8
// let posicion = 0
// let buscarCerveza = (beers,cerveza) => {
//     for (let i = 0; i < beers.length; i++) {
//         if(beers[i]== cerveza)
//             posicion = i

//     }

//     return posicion
// }
// let buscarCervezaa = (beers,cerveza) => beers.findIndex(beer => beer.name == cerveza)
// console.log(buscarCerveza(beers,"Buzz"));
// console.log(buscarCervezaa(beers,"Buzz"));

//9

// let filtrarPorAlchohol = (beers, alcohol) => beers.filter(beer => beer.abv <= alcohol).map(beer => ({ name: beer.name, abv: beer.abv, ibu: beer.ibu }));

// console.log(filtrarPorAlchohol(beers, 6));
//10
// function ordenarCervezas(cervezas, propiedad, ascendente) {
//     // Paso 1: Obtener solo las primeras 10 cervezas
//     const primerasDiezCervezas = cervezas.slice(0, 10);
  
//     // Paso 2: Ordenar las cervezas en función de la propiedad y el orden
//     primerasDiezCervezas.sort((a, b) => {
//       if (ascendente) {
//         return a[propiedad] > b[propiedad] ? 1 : -1;
//       } else {
//         return a[propiedad] < b[propiedad] ? 1 : -1;
//       }
//     });
  
//     // Paso 3: Devolver la matriz ordenada
//     return primerasDiezCervezas;
//   }
  
//   // Ejemplo de uso
 
//   const resultado = ordenarCervezas(beers, 'precio', true);
//   console.log(resultado);

// //11 
// function renderizarTablaCervezas(beers, elementoId) {
//     // Paso 1: Obtener el elemento HTML por su ID
//     const contenedor = document.getElementById(elementoId);
    
//     // Verificar si el contenedor existe
//     if (!contenedor) {
//       console.error(`El elemento con ID '${elementoId}' no existe.`);
//       return;
//     }
  
//     // Paso 2: Crear la tabla y sus encabezados
//     const tabla = document.createElement('table');
//     tabla.innerHTML = `
//       <thead>
//         <tr>
//           <th>Nombre</th>
//           <th>ABV</th>
//           <th>IBU</th>
//         </tr>
//       </thead>
//       <tbody>
//       </tbody>
//     `;
  
//     // Paso 3: Iterar sobre la matriz de cervezas y crear filas
//     cervezas.forEach(cerveza => {
//       const fila = document.createElement('tr');
//       fila.innerHTML = `
//         <td>${cerveza.nombre}</td>
//         <td>${cerveza.abv}</td>
//         <td>${cerveza.ibu}</td>
//       `;
//       tabla.querySelector('tbody').appendChild(fila);
//     });
  
//     // Paso 4: Insertar la tabla en el contenedor
//     contenedor.innerHTML = '';  // Limpiar cualquier contenido previo
//     contenedor.appendChild(tabla);
//   }
  
//   // Ejemplo de uso
//   const cervezas = [
//     { nombre: 'Cerveza A', abv: 5.0, ibu: 20 },
//     { nombre: 'Cerveza B', abv: 4.5, ibu: 30 },
//     { nombre: 'Cerveza C', abv: 6.0, ibu: 25 },
//     // Agrega más cervezas según sea necesario
//   ];
  
//   // Asegúrate de tener un elemento con el ID 'tabla-cervezas' en tu HTML
//   document.addEventListener('DOMContentLoaded', () => {
//     renderizarTablaCervezas(cervezas, 'tabla-cervezas');
//   });
  