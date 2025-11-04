console.log(Date());
let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let createdDate= new Date(2025,0,23,5,3)//yaha apko smj aay huga ki js date me month 0 se start huthe hai or hum pramiter badgayge toh time and second bhi milega 
console.log(createdDate)
console.log(createdDate.toDateString())
console.log(createdDate.toLocaleString())
let mytimeStranp=Date.now();
console.log(mytimeStranp);
console.log(createdDate.getTime().toString());
console.log(Date.now());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getYear());
// const ddate= newDate.toLocaleString('default',{
//     weekday:'lang'
// })
// console.log(ddate.weekday);








