// let age = 23;
// age = 25;
// console.log(age);

// for(var i = 0; i < 5; i++){
//     console.log("Inside Loop" + i);
// }
// console.log("outside loop" + i);

/*const obj = {name:"Sabbir"};
obj.name = "Sun";
console.log(obj.name);*/

// Default Function Parameters

/*function say(message){
    console.log(message);
}
say("Hello Sun")*/

// Rest Parameters

/*function rest(...Name){//rest(a,b, ...sun) many value
    console.log(Name);
}
rest("Sabbir","Sun");*/

// Spread Operator Modern

/*const arr1 = [1,2,3];
const arr2 = [...arr1,4,5,6]; // array 1 er gulo array 2 te show korar jnno 
console.log(arr2);*/

// Advance JavaScript Obejct

/*function say(message,name){
    return{
        message,
        name
    }
}
console.log(say("Hi Sabbir", "Sun"))*/

// For of Loop & For in Loop

/*for(let i = 0; i < 10; i++){
    console.log(i);
}

const arr1 = [1,2,3,4,5]

for(newArray of arr1){// for of work
    console.log(newArray);
}

const arr2 = [1,2,3,4,5]

for(newArray in arr1){// for in work show index number
    console.log(newArray);
}

const obj = {
    name: "Sabbir",
    age: "23",
    location: "Dhaka"
}
for(newObj in obj){// for in work show index number
    console.log(newObj);
}*/


// ES-6 Template literals

/*const str = `What's your name 
"My name is Md Sabbirul Islam Sun"`
console.log(str);

const name = `Sabbir`;
const age = 23;

console.log("My Name is " + name + " & I am " + age + " Year's old") // ES-5
console.log(`My name is ${name} & I am ${age} year's old`); // ES-6*/

// Destructuring ES-6 array

/*const arr1 = [1,2,3,4,5]
let [a,b,c, ...z] = arr1;
console.log(z);*/

// Destructuring ES-6 obj

/*const Obj = {
    name: "Sabbir",
    age: "23",
    ID: 109,
}
const {name,age,ID} = Obj;
console.log(name,age,ID);*/

// ES-6 Modules import export

import {NewMessage} from "./message.js";
console.log(NewMessage);


