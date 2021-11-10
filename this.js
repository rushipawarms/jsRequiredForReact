// var name="rushi";
// console.log(this.name);
// let obj={
//     name:"ram",
//     //object function is kown as method
//     fn:function(){
//     console.log(this.name);
// }} 
// //this is called funtion
// function add(){
   
//     console.log(this.name)
//     function add1(){
//         console.log(this.name);
//     }
//     //here also we call function not a method
//     add1();
// }
// //when call function then this refer to window or global object
// add();
// //when call method then this refer to current object 
// //obj.fn();


// //here also refere to global becuase we call fuction fn1
// let fn1=obj.fn;

// fn1();


// 2nd In case of arrow funcion:
// arrow does no have its own this so it will take this from outer function
//and also not follow method rule.(if we call method then this refere to global in case of arror function)

// var name="rushi";
// console.log(this.name);
// let obj={
//     name:"ram",
//     //object function is kown as method
//     fn:function(){
//     console.log(this.name);
// }} 
// //this is called funtion
// function add(){
   
//     console.log(this.name)
//     const add1=()=>{
//         console.log(this.name);
//     }
//     //here also we call function not a method
//     add1();
// }
// //when call function then this refer to window or global object
// add();
// //when call method then this refer to current object 
// //obj.fn();


// //here also refere to global becuase we call fuction fn1
// let fn1=obj.fn;

// fn1();


//3rd case use of bind fuction if we want curent object from this

var name="rushi";
console.log(this.name);
let obj={
    name:"ram",
    //object function is kown as method
    fn:function(){
    console.log(this.name);
    //this is called funtion
function add(){
   
    console.log(this.name)
    function add1(){
        console.log(this.name);
    }
    //here also we call function not a method
    let ret=add1.bind(obj);
    ret();
}
//when call function then this refer to window or global object
add();
}} 

//when call method then this refer to current object 
//obj.fn();


//here also refere to global becuase we call fuction fn1
let fn1=obj.fn;

fn1();