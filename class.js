//class is working in strict mode 
class Person{

    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    getName(name,age)
    {
        console.log(this);
        console.log(`His name is ${this.name} and age is ${this.age}`);
    }
    setName(name,age)
    {
        this.name=name;
        this.age=age;
    }

}
let Binod=new  Person("ram",23);
// Binod.getName();
// Binod.setName("rushi",23);
// Binod.getName();
// //op->His name is ram and age is 23
// //class.js:10 His name is rushi and age is 23

// document.querySelector("button").addEventListener("click",Binod.getName);//His name is  and age is undefined and this is become html element

// document.querySelector("button").addEventListener("click",Binod.getName());//His name is ram and age is 23 and this become current object

//setTimeout(Binod.getName,1000);//His name is  and age is undefined here not any listener so this becaome a window object

// setTimeout(function(){
//    Binod.getName();
// } ,1000)
// //His name is ram and age is 23


// let fn=Binod.getName;
// fn();//here class is work in strict mode so function call give undefined so we getting error;