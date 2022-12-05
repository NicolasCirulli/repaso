// 1. Escribir un algoritmo que muestre la tabla de multiplicar de un número introducido por el usuario.

// let numeroIngresado =  parseInt( prompt( 'Ingresar numero' ) ) 

// let tabla = []

// for( let i = 1; i <= 200 ; i = i + 1){
//     tabla.push(` ${numeroIngresado} x ${ i } = ${ numeroIngresado * i } `)
// }

// console.log(tabla)


// 2. Escribir un algoritmo que calcule la sumatoria desde 0 hasta numeroIngresado, donde numeroIngresado es un número

// let numeroIngresado =  6
// let lista = []
// let resultado = 0

// for( let i = 0; i <= numeroIngresado ; i = i + 1 ){
//     lista.push( i )
//     console.log(lista)
//     //[ 0, 1, 2, 3,4,5,6]
// }
// console.log(lista)
// for(let numero of lista ){
//     resultado += numero
//     console.log(resultado)
// }

// console.log( `El resultado de la sumatoria desde 0 hasta ${numeroIngresado} es : ${resultado}` )

// 3. Dada la siguiente lista [1, 14, 56, 43, 23, 46, 58, 123, 67 ] escribir un algoritmo que muestre el número más alto.

// let lista = [1, 14, 56, 43, 23, 46, 58, 123, 67]

// let resultado = lista[0]

// // for (let i = 0; i < lista.length; i = i + 1) {

// //     if (lista[i] > resultado ) {
// //         resultado = lista[i]
// //     }

// // }

// for( let numero of lista ){
//     if (numero > resultado ) {
//         resultado = numero
//     }
// }

// console.log(resultado)



// 4. Generar una lista con el nombre y nombre completo de las provincias que se encuentran en la data

let lista = []

for( let provincia of data.provincias ){
    let aux = {
        nombre: provincia.nombre,
        nombre_completo : provincia.nombre_completo
    }
    lista.push( aux )     
}

console.log(lista)


// 5. Obtener la pronvincia con el nombre mas largo

let resultado = lista[0].nombre

for( let provincia of lista ){
    if( provincia.nombre.length > resultado.length){
        resultado = provincia.nombre
    }
}

console.log(resultado)

// 6. Generar una lista con los numeros del 1 al 100 y otras dos con los numeros pares e impares

let numeros = []
let numerosPares = []
let numerosImpares = []

for( let i = 1; i <= 100; i++ ){
    numeros.push( i )
    if( i % 2 == 0 ) numerosPares.push( i )
    else numerosImpares.push( i ) 
}

// console.log(numeros)
// console.log(numerosPares)
// console.log(numerosImpares)



// 7. Dada la frase "Mindhub 39-40" generar un algoritmo que genere una nueva frase al reves

let frase = "Mindhub 39-40"
let fraseNueva = ''



for( let i = frase.length - 1; i >= 0 ; i-- ){
    fraseNueva += frase[i]
}

console.log(fraseNueva)