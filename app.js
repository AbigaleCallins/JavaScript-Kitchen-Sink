let me = "Abigale";
const state = 50;


//This function should comptue to results of 4 + 5. Sum is the name, + creas the function.//
let sum = 5 + 9;
console.log(sum);

//Naming function sayHello
function sayHello() {
    alert("Hello World!")
}

// To display sayHello function.//
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry" + " " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//Looop to display each vegtable in the developer console.

let vegs = ["beans", "carrots", "broccoli", "spinach"]
for (var i = 0; i < vegs.length; i++) {
    console.log(vegs[i])
}

let pet = {
    name: "Diamond",
    breed: "Schnauzer"
}

console.log(pet.name)

let objects = [
    {
        "name": "Mike",
        age: 12
    },
    {
        "name": "Jackie",
        age: 44
    },
    {
        "name": "Cindy",
        age: 28
    },
    {
        "name": "Levi",
        age: 10
    },
    {
        "name": "Kate",
        age: 20
    }
];

for (let i = 0; i < objects.length; i++) {
    checkAge(objects[i].name, objects[i].age)
}

function getLenght(word) {
    return word.length
}

let wordLenght= getLenght('Hello World');

if (wordLenght % 2 == 0) {
    console.log('Hello the world is nice and even!');
} else {
    console.log('this world is an odd place.')
}