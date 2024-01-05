

const greet =  [1 , 3,4,5,56,45,3,23,23,4,34,3434]

for (const i of greet) {
    console.log(i)
}


let arr = 'this is array '
for (const arrays of arr) {
    // console.log(` the form of for loops iss ${arrays}`)
    
    
}


///maps


const map =  new Map();

map.set('in' , "India")
map.set('Pak' , "pakistan")
map.set('Gb' , "Gilgti Baltistan")
map.set('kiu' , "karakrom international university ")


console.log(map);


for (const [key ,value] of map) {
    console.log(key ,  "=-" ,value );
}