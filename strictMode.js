"use strict";
// message ="hello world";
// console.log(message);

//output->strictMode.js:2 Uncaught ReferenceError: message is not defined
   // at strictMode.js:2

//    let message="hello world";
//    console.log(message);


//output->hello world;o


//In case of function call "this" is become undefined not getting window onject.
// const obj={
//     message:"hello, world",
//     logMessage:function(){
//         console.log(this);
//     }
// };
// console.log(this.window);//here we getting windows object
// let fn=obj.logMessage;
// fn();

//output-> undefined