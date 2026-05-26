// 1. Javascript arrays
let names = ["Joshua", "Wesley", "Russell", "Lucy"];
console.log(names);
console.log(names[1]);
console.log(names[2]);
console.log(names[names.length -1]);

let ages = [8, 6, 2];

// 2. Javascript objects

    //literal objects
    let student = {
        // key/value pairs
        name : "Bob",
        class : "WDD131",
        grade : "A",
        age : "27"
    };

    console.log(student);
    console.log(student.class);


//3. Array methods

names.forEach((name) =>{

    console.log(name);
})

let newNameArray = names.map((name) =>{
    return name + " Crabb";
})

console.log(newNameArray);

//Filter function returns a new array with filtered values
let filteredArray = names.filter((name) =>{
    return name [0] === 'W';
}) 

console.log(filteredArray);