// message="fake";
// const obj={
//     message:"hello, world",
//     logMessage:function(){
//         console.log(this.message);
//     }
// };

// setTimeout(obj.logMessage,1000); ////o/p->fake

// // setTimeout(function(){
// //     obj.logMessage();
// // } ,1000); o/p-> Hello world

// // setTimeout(obj.logMessage.bind(obj) ,1000); o/p->Hello world


// const obj={
//     who:'World',
//     greet(){
//         return `Hello, ${this.who}`;
//     },
//     farewell=()=>{
//         return `Goodbye, ${this.who}`;
//     }
// };
// console.log(obj.greet());
// console.log(obj.farewell());
//o/p->Hello, World
//Goodbye, undefined