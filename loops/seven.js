

// +++++ maps()

let Nums = [1,2,3,4,5,6,7,8,9,10 ,1,12,13,14,14,15]

// const myNums =Nums.map( (nomber) => {
//     return nomber - 10
// }  )
// console.log(myNums);

////wrong this is undefined

// const myPage =Nums.forEach( (bugs) => {
//    if(bugs)
// } )
// console.log(myPage);




const userNums = Nums
                     .map(   (nums) => (nums*2 ))
                     .map((nums) => nums - 10)
                     .filter((nums) => (nums >= 14) )
                     console.log(userNums);
