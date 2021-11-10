// let arr=[1,2,3,4];

// let arr1=[...arr];
// arr1.push(4);
// console.log(arr);
// console.log(arr1);

// let obj={
//     name:"rushi",
//     add:{
//         villege:"sdsfdf",
//         city:"sfdf",
//         pincode:"5465"
//     }
// }

// let obj1={...obj};

// obj.name="ram";
// console.log(obj);
// console.log(obj1);

let obj={
    name:"rushi",
    add:{
        villege:"sdsfdf",
        city:"sfdf",
        pincode:"5465"
    }
}

//let obj1={...obj};
let obj1=JSON.parse(JSON.stringify(obj));

obj.name="ram";
obj.add.city="shri";
console.log(obj);
console.log(obj1);