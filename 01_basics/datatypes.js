/* javascript have two type of  java script one primetive secound non-primitive datatype
primitive data type 
js have 7 type of primitive data type
String,boolean,number,
undefine , null
symbol or bigint
*/
console.log("Primitive")
let name="hitesh";
let age = 25;
let gread=6.5;
let pass=true;
let dep;
let classs=null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof gread);
console.log(typeof pass);
console.log(typeof dep);
console.log(typeof classs);
//null when we check null by typeof it give object but null is a primative this a Historycal bag
// if we chick null type of use == and === condition



console.log(typeof collage);





console.log("Non-primetive") 
/*Array
object
function
*/

let lang=['hindi','english', 'french']
console.log(typeof lang)

const info ={
    email:"suryash@smail.com",
    name:"name",
    age:28
}

function calls(){
    console.log(info)
}
calls()
console.log(typeof info)
console.log(typeof calls)