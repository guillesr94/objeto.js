// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datos = {
    nombre:"Guillermo",
    apellido:"Suarez",
    edad:28,
    altura:1.79,
    eresDesarrollador:true
};


// - Una variable que obtenga tu edad a partir del objeto anterior
let {edad}=datos;
console.log(edad)


// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let lucas = {...datos};
lucas.nombre="Lucas",
lucas.apellido="Torres",
lucas.edad=35,
lucas.altura=1.80,
lucas.eresDesarrollador=false

let camila = {...datos}
camila.nombre="Camila",
camila.apellido="Grazia",
camila.edad=25,
camila.altura=1.60,
camila.eresDesarrollador=false;
let lista =[{...datos},{...lucas},{...camila}]
console.log(lista);


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor;
let listaOrdenada = [...lista]

 listaOrdenada.sort((a,b)=>{
    return a.edad -b.edad
});
console.log(listaOrdenada);