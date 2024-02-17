const tinderUser = new Object () //constructor //singleton object
// const tinderUser ={}         //non-singleton object

tinderUser.id = "123";
tinderUser.name = "Ajaya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //{}

const regularUser = {
    email: "ajaya@gmail.com",
    fullname: {
        userfullname: {         //nestd object
            firstname: "Ajaya",
            lastname: "Swain"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);  //Ajaya
// console.log(regularUser.fullname?.userfullname.firstname);  //Ajaya (? represents if  exists)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)  //object assign 
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} //spread operator (mostly used)
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "aj@gmail.com"
    },
    {
        id: 2,
        email: "ak@gmail.com"
    },
    {
        id: 3,
        email: "as@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]  (used to get the keys of the given obj)
console.log(Object.values(tinderUser));  //[ '123', 'Ajaya', false ]
console.log(Object.entries(tinderUser)); //o/p array inside array format //[ [ 'id', '123' ], [ 'name', 'Ajaya' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

//***************************************** */
