// ------------------------
var x = "2", y = "10";
// alert(x < y);
console.log(x < y);

// console.log(alert)

//---------------------------------
// Santa's sleigh

// We're making the final adjustments to Santa's sleigh!

// As you already know, the sled is flying and we are adjusting the motor so that it makes parabolas as optimal as possible. For this, the jump must always be upwards and, from the highest point, it must always go downwards...

// Our trusted mechanic, Alexander, who has a great Tesla, has explained to us that the jumps can be seen as arrays... and that we just have to make sure that the numbers go up and down correctly. He also warns us that we will only pass arrays of at least three positions.

// Make an algorithm that receives in the console a text with values (separated by commas) and prints true in the console if the values go up and down strictly, otherwise it prints false

// Example:

// Input:
// 0,3,2,1 // Up and down strictly

// Output:
// true

// Another example:

// Input:
// 1,2,3 // Only go up

// Output:
// false

// TIP: To get and print values in the console you can use this code example:

// const init = { input: process.stdin, output: process.stdout }
// const readline = require("readline").createInterface(init)[Symbol.asyncIterator]();

// (async () => {
             // Read values in console
    // let line1 = (await readline.next()).value
    // let line2 = (await readline.next()).value

            // Print text in console
    // console.log(line1)
    // console.log(line2)
// })();

//------------------------------- excersise "2"-----------------

// Adding arrays

// Create an algorithm that receives from the console (use the TIP below) two lists of numbers separated by commas, each list being separated by a slash:

// const numbers = (await readline.next()).value
// // numbers => "1,2,3/3,2,1"

// Creates two lists from the received text and prints a new list by adding all the values from the two previous lists.

// "// numbers = 1,2,3/3,2,1" => [1, 2, 3] [3,2,1]
// // [1, 2, 3] + [3,2,1] => [4, 4, 4]

// Remember that to print you must use console.log() 
// TIP: To get and print values in the console you can use this code example:

const interface = { input: process.stdin, output: process.stdout }
// const readline1 = require("readline1").createInterface(interface)[Symbol.asyncIterator]();

// (async() => {
    //  // Read values in console
    //  let line1 = (await readline1.next()).value
    //  let line2 = (await readline1.next()).value

    //  // Print text in console
    //  console.log(line1)
    //  console.log(line2)
// })();

// -----------------------------------------------

let array = [1, 2, 10]
array[10] = 'Sergio'
console.log(array.length)   // 11

//------------- ----------------------------------

let a = 1 
let b = 2 

// ;[a, b] = [b, a]
// console.log({a, b})

let c = a
a = b
b = c
console.log({a, b})

//----------------------------------------------------

function Buscar(my_list){
   let new_list = []
    if(my_list.length % 2 === 1){
        for (const iterator of my_list) {
            for (const iterator2 of iterator) {
                new_list = new_list.push(iterator2)
                // console.log(iterator)
            }
        }
    }else{
        new_list = my_list.flat()
    }
    new_list.sort(function(a, b) {return a - b})
    
    console.log(new_list)
    return new_list
}

console.log(Buscar([ [6, 8], [2,4]]))
console.log(Buscar([8, [6, 8], [[2,4], [23, 9]]]))


