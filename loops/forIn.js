const languages = {

    js: 'java script ',
    Cpp: ' C++',
    rb : 'rubby',
    swift:'swift by apple'
}

// for (const key of languages) {
//     console.log(key);
// }
// for (const key in languages) {


// console.log(` ${key} is the shortCut of ${languages[key]}`);

// }


// const progrmas = ['sibtain', 'meassum ', 'hasinaan',]

// for (const key in progrmas) {
//   console.log(progrmas[key]);
// }



    // const map =  new Map();

    // map.set('in' , "India")
    // map.set('Pak' , "pakistan")
    // map.set('Gb' , "Gilgti Baltistan")
    // map.set('kiu' , "karakrom international university ")


    // console.log(map);


    // for (const key in map) {

    //     console.log(map[key]);
    // }


    const coding = [ "sibtain ", "hasnain ",  "malik ", "javascript", "rubby", "python"];
    
    // coding.forEach( function (value) {
    //     console.log(value);
    // } )


    // coding.forEach( (find) => {
    //     console.log(find);
    // } )



    function printMe(find){
        console.log(find);
    }
    coding.forEach(printMe)