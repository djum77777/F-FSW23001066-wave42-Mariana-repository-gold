//learn about function
//function functionName(parameters) {
//    // code to be executed
//  }

function hitPangkat(x){
    bilSatu=x;
    bilDua=x;
    return (bilSatu**bilDua);
}
console.log('Normal Function',hitPangkat(3));

//function expression don't have name and can be call using the variable name
const hit=function(x){
    return x**x;
}
console.log('function expression',hit(3));

//ES6 arrow function, can be call using the variable name too
const hitku=(x)=>x**x;
console.log('arrow function ES6',hitku(3));

//ES5 arrow function
const hitku2=(x)=>{
    return x**x;
}
console.log('arrow function ES5',hitku2(3));

//function constructor define by new Function

const hitF = new Function ("a","b","return a*b");
console.log('function constructor',hitF(3,3));