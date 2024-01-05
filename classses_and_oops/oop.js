// const user = {
//   username: "sibtain",
//   loginAccount: 8,
//   signIN: false,

//   getUserDetails: function () {
  
//     // console.log('got user details');

//     // console.log(`username:  ${this.username}`);
//     console.log(this);
//   }
// };
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

// constructor funciton

// function user(username , adddres , contact){

//     this.username = username;
//     this.adddres = adddres;
//     this.contact = contact;

//     return this 
// }

// const userOne  = new user('sibtain ', 'gIlgit','03554712317');
// console.log(userOne);


function user(username, address, contact) {
    this.username = username;
    this.address = address;
    this.contact = contact;

    this.greeting = function(){
        console.log('wlecome ${this.username}');
    }
    // return this;
  }
  const userOne =  new user('sibtain', 'Gilgit', '03554712317');

  const userTwo =  new user('hashmi' , 'danyoure','0581145')
  console.log(userOne);
  console.log(userTwo);

  