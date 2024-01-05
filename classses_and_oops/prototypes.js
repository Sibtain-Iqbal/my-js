// let myname = 'sibtain            '

// console.log(myname.truelength);

let myHeros = ["Sibtain", "tokyo"];

let heroPower = {
  sibtain: "thor",
  tokyo: "MoneyHeist",

  getspiderPower: function () {
    console.log(`Power of toyo is  ${this.tokyo}`);
  },
};

Object.prototype.Finnd = function () {
  console.log(` Sibtain is present in all objects`);
};


Array.prototype.Array = function(){
    console.log(`array is present  in all arrays`);
}
// heroPower.Finnd();
// myHeros.Finnd();

// myHeros.Array()

// heroPower.Array()



////Inhertnece 

const user = {
    name :  'sibtain',
    email : 'sibtain0934@gmail.com'
}
const Teacher  = {
    makevedio: true
}

const teacherSupport = {

    isAvillable : false
}

const TASupport = {
    makeAssigment : 'python assisment',
    fullTime : true,
    __proto__: teacherSupport
}
Teacher.__proto__ =  user;


///modern syntaax

Object.setPrototypeOf(teacherSupport , Teacher);

let antotherUserNmae = 'chaiaurcode       '

String.prototype.trueLength = function (){
    
    console.log(`${this}`);
    console.log(`true length is :${this.trim().length}`);

}


antotherUserNmae.trueLength()
