const persona = {
    nombre: 'Andres',
    apellido: 'Perlo',
    edad: 31
}
/* console.log(persona) */
let jsonStringify = JSON.stringify(persona)
/* console.log(jsonStringify) */

let jsonParse = JSON.parse(jsonStringify)
/* console.log(jsonParse) */

const personas = [
    {
        nombre: 'Andres',
        apellido: 'Perlo',
        edad: 31
    },
    {
        nombre: 'Rosario',
        apellido: 'Pittaro',
        edad: 21
    },
    {
        nombre: 'Tomas',
        apellido: 'Bach',
        edad: 22
    }
]

const arrayNuevo = []

/* console.log(personas) */
const arrayStringify = JSON.stringify(personas)
/* console.log(arrayStringify) */

const arrayParse = JSON.parse(arrayStringify)
/* console.log(arrayParse) */

localStorage.setItem('persona', JSON.stringify(persona))
let getLocalStorage = JSON.parse(localStorage.getItem('persona'))
/* console.log(getLocalStorage) */

localStorage.setItem('personas', JSON.stringify(personas))
let getLocalStorageArray = JSON.parse(localStorage.getItem('personas'))
console.log(getLocalStorageArray)


personas.push({
    nombre: 'jose',
    apellido: 'diaz',
    edad: 20
})


localStorage.setItem('personas', JSON.stringify(personas))

