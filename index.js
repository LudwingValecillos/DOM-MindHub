// Capturar el H1, mediante un ID, en una variable llamada "titulo".
// Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.
// Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja.
// Capturar y modificar el p del footer, agregarle tu nombre completo y cohort.
// Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id.
// Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción).
// Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).
// Mostrar las cards con los datos pedidos en el div "#contenedor".
// Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
// Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true.
// Mostrar la lista de frutas dulces en el div "#lista".
// TIP: cuando busques elementos por ID recuerda que es mejor usar "getElementById". En cambio cuando sea por clase o etiqueta es mejor que uses "querySelector" o "querySelectorAll".

//1. Capturar el H1, mediante un ID, en una variable llamada "titulo". 

let titulo = document.getElementById("titulo");

//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas"
// y cambiar el contenido del tÃ­tulo por el de esta variable.

let tituloPrincipal = "Frutas";
titulo.textContent = tituloPrincipal;

//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 
let headerAndFooter = document.getElementsByClassName("color");
for (let i = 0; i < headerAndFooter.length; i++) {
    headerAndFooter[i].style.backgroundColor = "orange";
    
}

// //--4 Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 


let parrafo = document.querySelector("footer p");
parrafo.innerText = " Ludwing  MindHub cohort 54";


//--5.Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id.;


let main = document.querySelector('main');
let contenedorDiv = document.createElement('div');
contenedorDiv.id = 'contenedor';
contenedorDiv.classList.add("flex","flex-wrap","w-full", "gap-2", "justify-center", "py-10");
main.appendChild(contenedorDiv);
let divCreado = document.getElementById("contenedor");

//6
function estructuraCard(nombre, foto, descripcion) {
    return `
        <article class="w-1/5 h-72 border-black border-2 rounded-lg">
            <img src="${foto}" alt="${nombre}" class="card-img w-full h-48 justify-center">
            <h2 class="card-title text-center">${nombre}</h2>
            <p class="card-description text-xs pl-2">${descripcion}</p>
        </article>
    `;
}
//7
function crearCard(frutas) {
    let cardsHTML = '';
    for (let i = 0; i < frutas.length; i++) {
        const fruta = frutas[i];
        cardsHTML += estructuraCard(fruta.nombre,fruta.foto,fruta.descripcion)
    }
    return cardsHTML
}

let crearcards = crearCard(frutas);
console.log(crearcards);
divCreado.innerHTML = crearcards;

//9
const crearH2 = document.createElement('h2');
crearH2.textContent = 'Frutas Dulces';
crearH2.classList.add('text-3xl', 'text-center', 'py-4');
main.appendChild(crearH2);

let listaDiv = document.createElement('div');
listaDiv.id = 'lista';



main.appendChild(listaDiv);
let listaCreada = document.getElementById("lista");


function listarFrutasDulces(frutas) {
    
    let lista = document.createElement('ul');
    frutas.forEach(fruta => {
        if(fruta.esDulce){
            let item = document.createElement('li');
            item.classList.add("list-disc");
            item.textContent = fruta.nombre;
            lista.appendChild(item);
        }
    });
    return lista;
}

let listaContainer = document.getElementById('lista');
let frutasDulces = frutas.filter(fruta => fruta.esDulce);
listaContainer.appendChild(listarFrutasDulces(frutas));

// 10


