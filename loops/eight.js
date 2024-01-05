

const arrayNums = [1,2,3,4,5,]

// const myNums = arrayNums.reduce(function (acc, curval){
// console.log( `value of acc :${acc} and value of curval : ${curval}` );
//     return acc + curval
// },0)

// const myNums = arrayNums.reduce(  (acc , curval) => (acc + curval)   )
// console.log(myNums);

const myNums = arrayNums.reduce( (acc , curval) => acc + curval )
console.log(myNums);