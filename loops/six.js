

///  filter maps ,return valuess from filter map and foreach loops







// const programing =  [ 'coding ' , 'java' , 'ruby' , 'python' , 'node.js' ];

//  const values = programing.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

//the value is undefined this show foreachloop cant return the value

// console.log(programing);
 

const yourNums = [ 1,2 ,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// const values = yourNums.filter( (num) => (num>2 ) )
// console.log(values);



// const values = yourNums.filter( (num) => {
//     return num>2 
// } )
///use{ } we can write return fro return vales
// console.log(values);

/////////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


////how fro ecah loops return the values

const myNums = [];

yourNums.forEach( (num) => {

    if(num>1){
        myNums.push(num)
    }
} )


console.log(myNums);

//

///this filter return the values

const books = [
    {     title:'book one' , genre:'fiction', publish:1992 ,
     edition: 2004 } ,

    {     title:'book two' , genre:'Non fiction', publish:1982 ,
     edition: 2008 } ,

    {     title:'book three' , genre:'History', publish:1999 ,
     edition: 2010 } ,

    {     title:'book four' , genre:'science', publish:1992 ,
     edition: 2014 } ,

     {  title :'book five' , genre : 'fiction' , publish :2000,
     edition:2020
     },

     { title:'book six' ,genre:'history' , publish:1992,
    edition:2023
    } 


]

// const userBooks = books.filter(  (bug) => bug.genre === 'fiction'  )

// const userBooks = books.filter(   (booksValues)  => {
//     return booksValues.genre === 'fiction'
// })

// console.log(userBooks);


// let userBooks = books.filter((specBooks)=> ( specBooks.publish=== 1992 ))
// console.log(userBooks);




// const userBooks = books.forEach(  (bug) => {
//     if( bug === 'fiction' )
//    books.push(bug)
// }  )
// console.log(userBooks);


let userBooks = books.filter(   (espeBooks) => (espeBooks.publish >=1982 && espeBooks.genre ==='history')  )

console.log(userBooks);