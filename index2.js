
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



// let buscarPorIbu = (beers,ibu) => {
//     let beerEncontrada = beers.find(beer => beer.ibu == ibu);
//     if(beerEncontrada){
//         console.log(beerEncontrada);
//     }else console.log(`No hay cerveza con un ibu de valor ${ibu}` );
// }



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
// es verdadera o descendente si es falsa.
// let beersOrdered = (arrayBeers, property, boolean) => {
//     let ordered = arrayBeers
//         .filter((beer) => beer[property])
//         .toSorted((a, b) => {
//             if (a[property] < b[property]) {
//                 return -1;
//             } else if (a[property] > b[property]) {
//                 return 1;
//             }
//             return 0;
//         });

//     if (boolean) {
//         return ordered.slice(0, 10);
//     }
//     return ordered.reverse().slice(0, 10);
// };

// console.log(beersOrdered(beers, "abv", true));
// console.log(beersOrdered(beers, "abv", false));


// //11 
// function renderizarTablaCervezas(beers, elementoId) {
//     const contenedor = document.getElementById(elementoId);
    
//     // Verificar si el contenedor existe
//     if (!contenedor) {
//       console.error(`El elemento con ID '${elementoId}' no existe.`);
//       return;
//     }
  
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
  
//     cervezas.forEach(cerveza => {
//       const fila = document.createElement('tr');
//       fila.innerHTML = `
//         <td>${cerveza.nombre}</td>
//         <td>${cerveza.abv}</td>
//         <td>${cerveza.ibu}</td>
//       `;
//       tabla.querySelector('tbody').appendChild(fila);
//     });
  
//     contenedor.innerHTML = '';  // Limpiar cualquier contenido previo
//     contenedor.appendChild(tabla);
//   }
  
//   // Ejemplo de uso
//   
  
//   document.addEventListener('DOMContentLoaded', () => {
//     renderizarTablaCervezas(beers, 'tabla-cervezas');
//   });
  