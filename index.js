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

function say(message,name){
    return{
        message,
        name
    }
}
console.log(say("Hi Sabbir", "Sun"))

