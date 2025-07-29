const users = [
    {
        FirstName: "Sarah",
        LastName: "Babs",
        age: 25,

    },
    {
        FirstName: "John",
        LastName: "Doe",
        age: 30
    },
    {
        FirstName: "Alice",
        LastName: "Smith",
        age: 28
    },
    {
        FirstName: "Blue",
        LastName: "Johnson",
        age: 35
    },
    {
        FirstName: "Eniola",
        LastName: "David",
        age: 22
    },
    {
        FirstName: "Toyyib",
        LastName: "Furqan",
        age: 27
    },
    {
        FirstName: "David",
        LastName: "Prince",
        age: 32
    },
    {
        FirstName: "Frank",
        LastName: "Francisco",
        age: 29
    },
    {
        FirstName: "Grace",
        LastName: "Akintoye",
        age: 17
    },
    {
        FirstName: "Han",
        LastName: "Paul",
        age: 26
    },
    {
        FirstName: "Ife",
        LastName: "Ogunleye",
        age: 27
    },
    {
        FirstName: "Joy",
        LastName: "Ojo",
        age: 24
    },
    {
        FirstName: "Kola",
        LastName: "Adeyemi",
        age: 33
    },
    {
        FirstName: "Lara",
        LastName: "Olaniyan",
        age: 30
    },
    {
        FirstName: "Mike",
        LastName: "Johnson",
        age: 28
    },
]

// const age = users.map(function(num){
//     return num.age
// })

// console.log(age)

// just the first names of users older than 18



users.filter((names)=>{
    if (names.age > 18) {
        console.log( names.FirstName  + ' ' + names.LastName + ' ' + ' age is' + ' ' + names.age );        
    }
})


    



