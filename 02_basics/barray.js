const frist=['Iron', 'thor','halk','captain'];
const nums=[1,2,3,4,5,6,7];
/*Array : Array is a set of collection which use to store multiple type datatype object function method etc in javascript 
 what Speacial in JS
 In js Array store multiple type of data
 primitive or non-primitive datatype in single  Array container
 JavaScript Copy-operation create Shollow copy
 Shollow Copy: It is a object Copy whose properties share the same references
 Matlab Same reffrence hutha hai agar hum uske copy me update karege toh uska real object me bhi changes huge because array have non-primitive type
*/
console.log(nums[3]);

// how to add new element in array
frist.push('blackpenther');
console.log(frist)
frist.pop()
console.log(frist)
console.log(frist.length);
console.log(frist.unshift(3));
console.log(frist)
console.log(frist.shift(0))
console.log(frist)

//++++++Another Type Array Declaration +++++call object type 
const student = new  Array("Sury", "ankita", "Neha", "Jagrati");
console.log(student);
// THIS TYPE  OF ARRAY IS A DECLARE OBJECT TYPE 
console.log(typeof frist);
console.log(typeof student);
// both are object type deffrence  seen on browser console variable type array return only type of object but use new keyword to declare array return Object in is method prototype

// +++++++Slice +++and ++++Splice
/*Slice use to return  a part of hole array the do not effect real array they make copy of array get a small part of array(starting index : ending index);
it can only take starting  and ending index like a prameter the return its return -1 index mean when array value 0 to 6 if want small part of array like 1 to 3 index its return
[2 ,3] ok the need to prameter that type slice(1,3);*/
console.log("A", nums);
const myA= nums.slice(1,3);
console.log(myA);
console.log("B", nums);
//here you see real array not effected by modification
/*Splice : Splice is  use to modify Array  when we use splice withdrow set part of array the plice ,manupleate real array and change real  arry one more think when we use splice
the cut full lenth of (start index to end index)mean when you try to splice (1,3) they well return [2,3,4] mean index(1,2,3)return and the can delete this part in real array
[1,5,6,7] array lenth may be 3 ok*/
const myB=nums.splice(1,3);
console.log(myB);
console.log(nums);
//+++++++++++++++++++++++++++++++Concatenate+Array++++++++++++++++++++++++++++++++
/*we know that in Javascript Array has a object type and the store multiple data type so there are so many method to concatenate array like push pop "+"
opreater ok example*/
// frist.push(student);
// console.log(frist)
// // in push when access element jagrati we need to difine  
// console.log(frist[4][3]);
//It not  a correct way to add two and more array because here array connect like a element so when check we 8 element in array but when we tale legnth of array is 5
//what can we use concat to add two array
const newArraySec=frist.concat(student);
console.log(newArraySec);
// now when we use concatenate to array by use concat the are attech togather good waynode
console.log(newArraySec[7])
// Spread: Spread use to Spread multiple array use this syntax(...Array,..Array) the work same like concatinate
const all_new_array= [...frist,...student,...nums];
console.log(all_new_array);
//flat 
// when array inhearet multiple array and we want to want all in array we use flat to spreat array
const another_array=[1,2,3,4,[5,6,7],9,[9.2,9.4]];
const real_array = another_array.flat(Infinity);
console.log(real_array);
//when we want to check element type kya koi element array hai ya nahi
const a= Array.isArray("hitesh")
console.log(a);
console.log(Array.from("hitesh"))
console.log(Array.from({name:"Hitesh"}))
let score1=100;  
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


 




 






