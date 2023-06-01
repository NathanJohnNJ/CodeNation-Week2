// Activity 1
console.log("Activity 1:");
let favouriteFilms = ["Mean Girls", "13 Going on 30", "My Sister's Keeper", "Death Becomes Her", "House Bunny"];
favouriteFilms.push("Rocky Horror Picture Show", "Barbie");
console.log(favouriteFilms);
for(let i = 0; i < favouriteFilms.length; i++){
    console.log(favouriteFilms[i]);
}

console.log("");

// Activity 2
console.log("Activity 2:");
for(let i = 0; i < 6; i++){
    let num = Math.floor(Math.random()*50);
    console.log(num);
}

console.log("");

// Activity 3
console.log("Activity 3:");
let array = [];
for(let i = 0; i < 10; i++){
    array.push(i);
}
array = array.reverse();
for(let i = 0; i < 10; i++){
    console.log(array[i]);
}

console.log("");

// Activity 4 
console.log("Activity 4:");
let films = ["Mean Girls", "13 Going on 30", "My Sister's Keeper", "Death Becomes Her"];
for(let i = 0; i < films.length; i++){
    console.log(films[i]);
}
(films[2] == "Ghostbusters")?console.log("Yes! The third film is Ghostusters!"):console.log("No! The third film is not Ghostusters!")
// array.splice() method:
// films.splice(2, 1, "Ghostbusters");
// console.log(films);

// array[index] method: 
films[2] = "Ghostbusters";
console.log(films);
(films[2] == "Ghostbusters")?console.log("Yes! The third film is Ghostusters!"):console.log("No! The third film is not Ghostusters!")

console.log("");

// Activity 5 
console.log("Activity 5:");
for(let i = 0; i < 6; i++){
    let num = Math.floor(Math.random()*30);
    console.log(num);
}
function divBySeven(num) {
    (num % 7 == 0)?console.log(`${num} is divisible by 7.`):console.log(`${num} is not divisible by 7.`)
}
for(let i = 0; i < 6; i++){
    let num = Math.floor(Math.random()*30);
    divBySeven(num);
}

console.log("");

// Activity 6 
console.log("Activity 6:")
let nathansFollowers = ["@spar3_rib", "@barbie", "@bobsbits", "@natalieknits"];
let ryansFollowers = ["@talltom", "@barbie", "@billywithaw", "@spar3_rib"];
for(let i=0; i<nathansFollowers.length; i++){
    for(let f=0; f<ryansFollowers.length; f++){
        (nathansFollowers[i]==ryansFollowers[f])?console.log(`${ryansFollowers[f]} follows both Nathan and Ryan`):void(0)
    }
}

console.log("");

// Activity 7
console.log("Activity 7:")

console.log("For loops are primarily used when we want to iterate through a set of data in a set increment and run a function for each piece of data. Cycling through the data in this way limits the types of data we can apply as the condition for the for loop.")
console.log("For example:")
console.log("")
console.log("for(let i=0; i<4; i++){")
console.log("    console.log(i);")
console.log("}")
console.log("gives us")
for(let i=0; i<4; i++){
    console.log(i);
}
console.log("")
console.log("While loops are used when we want to iterate through data or run a function, providing a given statement is true. If the given statement is false to begin with, the code will never run which could be a drawback in some situations.")
console.log("For example:")
console.log("")
students = ["Nathan", " Idnan", " Chloe", " Patrick", " Samuel"];
console.log(`The proposed class is ${students}.`)
while( students.length > 3 ){
    console.log(`There are too many students in the class. Sorry ${students[students.length-1]}, but you will have to change class.`);
    students.pop();
    console.log(`The new proposed class is ${students}.`)
}
console.log(`This is fine, so the final class is ${students}.`)
console.log("")
console.log("do...while loops will execute the given code within the do {} until the expression in the while() evaluates to false. The condition is assessed at the end of the code block meaning that the code will always run at least one time.")
console.log("For example:")
console.log("")
let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i; //This will concatenate i to result because result has been declared as a string with ''
} while (i < 5);
console.log(result);
console.log("My original variable was declared with result='' making it a string so each time the value has been concatenated to the string.")

console.log("running the same code again with result = 0; (a number) instead will total the sum of all the numbers instead of concatenating them")
result = 0;
i = 0;

do {
    i = i + 1;
    result = result + i; 
} while (i < 5);
console.log(result);