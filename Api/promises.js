// const promise1 = new Promise(function (resolve, reject) {
//   // do an async task
//   // db calls, network

//   setTimeout(function () {
//     console.log("task is complete");
//     resolve();
//   }, 2000);
// });

// promise1.then(function () {
//   console.log("promise consumed");
// }); // direct cntion of reolve

//
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("promise two is done ");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("prmoise two is consumed");
// });

// const dataPom = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve(
//            { username : "sibtain", email : "sibtain8844@gmail.com"}
//         )
//     },2000)
// })

// dataPom.then(function(userdta){
//     console.log(userdta);
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve([
//             username = 'sibtain',
//             userFathername = 'Xyz',
//             Contact = '......'
//         ])
//     },3000)
// }).then((uplod)=>{
// console.log(uplod);
// })



// const PromiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;

//     if (!error) {
//       resolve({ username: "Sibtain",password: "1234", });

//     } 
//     else reject("Error Something went wrong");
// }, 1000);});

//  PromiseFour
// .then((user) => {
//   console.log(user);
//   return user.username
// })
// .then(function(username){
//     console.log(
//         username
//     );
// }).catch((error) =>{
//     console.log(error);
// })



// new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         let error = true;

//         if(!error){
//             resolve({username:'hasnain',pasword :'1234',Contact :'0355555555'})
//         }
//         else(
//             reject('Something Went Wrong ')
//         )


//     },2000)
// })
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
// console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .then((user)=>{
//     console.log(user);
//     return user.Contact
// }).then((Contact)=>{
// console.log(Contact);
// })
// .catch((error)=>{
//     console.log(error);
// })

// .then((user)=>{
//     console.log(user);
//     return user.pasword
// }).then((password)=> {
//     console.log(password);
// })
// .catch((find)=>{
//     console.log(find);
// })
// .finally(()=> {
//     console.log('the prmoise is finally resolve or rejected Congratulation');
// })


const PromiseFive = new Promise((resolve,reject)=>{

    setTimeout(()=>{

        let error = true;
        if(!error){

            resolve({username: 'Python', password: '09876'})
        }
        else{
            reject('sOMENTHING was very WRONG') 
        }
    },1000)
});



async function conPromise (){
 
 try {
    const response = await PromiseFive
    console.log(response);
 } catch (error) {
    console.log(error);
    
 }
}
conPromise()


// async function dataUser (){
// try {
    
//  const response =  await  fetch('https://jsonplaceholder.typicode.com/users')
//  const data = await response.json()
//  console.log(data);
// } catch (error) {
//     console.log(`something went wrong ${error}`);
// }
// }
// dataUser()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((userResponse)=>{
//     return userResponse.json()
// })
// .then(function(data){
// console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })


fetch('https://jsonplaceholder.typicode.com/users')
.then((user)=>{

    return user.username
})
.then(function(username){
console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
console.log('Finally My Promises Complete');
})






