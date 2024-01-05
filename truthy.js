

const  userEmail =  undefined;

if(userEmail){
    console.log('user email is defined ');
}

else{
    console.log('user email is not defined ');
}


//fasly values : faslse , null ,bigint , "", null , 0 , -0 , undefined ;

// truthy valuse :  "0", "false " , "  " , [] , {}, function{}()




///+++++++++++++++++++++++==NULISH COALICING OPERATORES +++++++++++++++++++++++++


let var1 ;


let var2 = {
    name : "Sibtain",
    age: 18 ,
    location : "baltistain"
}


// var1 = 13 ?? 120
var1 = null ??  function my() {
    console.log('this is function');

    return var2;

}
my()

console.log(var1);