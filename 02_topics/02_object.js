//  object literals

// const JsUser = {
//     name : "Pawan",
//     "full name": "Pawan Giri",
//     age : 25,
//     sex : "Male",
//     email : "pawan@gmail.com",
//     isLoggedIn : false,
// }

// console.log(JsUser.full name);
// console.log(JsUser["full name"]);


// Singleton

//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Pawan";
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

const regualrUser = {
    email : "test@gamil.com",
    fullname : {
        userfullname : {
            firstname : "pawan",
            lastname : "giri"
        }
    }
}

//console.log(regualrUser.fullname.userfullname.firstname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1, obj2}

// obj3  = Object.assign({},obj1, obj2)
// console.log(obj3)

const users =[
    {
        id:1,
        email:"test@gmail.com"
    },
     {
        id:1,
        email:"test@gmail.com"
    },
    {
        id:1,
        email:"test@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


