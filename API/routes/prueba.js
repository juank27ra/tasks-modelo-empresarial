
function fixIt(my_list) {
    let new_list = [];
    if (my_list.length % 2) { // imperative code
        for (let item of my_list) {
            for (let element of item) {
                new_list.push(element);
            }
        }
    } else {  // functional code
        new_list = my_list.flat();
    }
        new_list.sort(function (x, y) {
            if (x % 5 === y % 5) {
                return  y - x
            } else {
                return  y % 5 - x % 5  
                // return  x % 5 - y % 5  
            }
        })
    return new_list
}

// console.log(fixIt([ [ 3, 4 ], [ 2, 6 ] ]))
console.log(fixIt( [ [ 3, 4 ], [ 12, 32, 89 ], [ 0 ] ]))
// [89,4,3,32,12,0]
console.log(fixIt( [ [ 3, 4 ], [ 12, 32, 89 ], [ 0 ], [ -1 ] ]))
// [89,4,3,32,12,0,-1]
//----------------------------------------------------

// Argumentos: [ [ 3, 4 ], [ 2, 6 ] ]

// Tu resultado:
// [2, 3, 4, 6]

// Resultado esperado:
// [4,3,2,6]

//----------------------------------------------------
// Argumentos: [ [ 3, 4 ], [ 12, 32, 89 ], [ 0 ] ]

// Tu resultado:
// Error: new_list.push is not a function
// Tipo de error: TypeError
// Lugar: Error en la linea número 7 (" new_list = new_list.push(element);")

// Resultado esperado:
// [89,4,3,32,12,0]

//----------------------------------------------------
// Argumentos: [ [ 3, 4 ], [ 12, 32, 89 ], [ 0 ], [ -1 ] ]

// Tu resultado:
// [-1, 0, 3, 4, 12, 32, 89]

// Resultado esperado:
// [89,4,3,32,12,0,-1]

//-----------------------------------------------------

// Argumentos: [ [ 3, 4 ], [ 12, 100, 89 ], [ 0 ], [], [ 56 ] ]

// Tu resultado:
// Error: new_list.push is not a function
// Tipo de error: TypeError
// Lugar: Error en la linea número 7 (" new_list = new_list.push(element);")

// Resultado esperado:
// [89,4,3,12,56,100,0]