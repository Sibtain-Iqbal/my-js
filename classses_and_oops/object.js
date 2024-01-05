function multiple(num){

    return num*7
}

multiple.power = 3;



console.log(multiple(6));
console.log(multiple.power);
console.log(multiple.prototype);


function createuser(username,price){

   this.username = username;
   this.price = price;
}

createuser()