// Activity 1
console.log("Activity 1:")
let age = 17;
if (age > 17){
    console.log("Yes, I can serve you.");
} else{
    console.log("You aren't old enough.");
}
console.log("")
console.log("Activity 1 - stretch:")
let country = "USA"
if (country != "UK"){
    console.log("Sorry, you aren't in the UK. I don't know the laws for your country, so I won't be serving you today")
} else if (age > 17 && country == "UK"){
    console.log("Yes, I can serve you.");
} else {
    console.log("You aren't old enough.");
}

//Activity 2
console.log("")
console.log("Activity 2:")
let pizzaTopping = "pineapple";
let favourite = ["pepperoni", "spicy beef", "cheese"];
let important = `${pizzaTopping} is an important ingredient for my pizza.`;
let dontLike = `${pizzaTopping} should not be on a pizza.`;
let dontMind = `I don't mind having ${pizzaTopping} on my pizza.`;
switch(favourite.includes(pizzaTopping)){
    case true:
        console.log(important);
        break;
    default:
        if (pizzaTopping.toLowerCase() == "ham" || pizzaTopping.toLowerCase() == "pineapple"){
            console.log(dontLike)
        }
        else {
        console.log(dontMind);
        }
}

//Activity 3
console.log("")
console.log("Activity 3:")
let password = "passwor";
(password.length < 8) ? console.log("The password needs to be 8 or more characters.") : console.log(password)

//Activity 3 - stretch
console.log("")
console.log("Activity 3 - stretch:")
let num = 16;
(num % 3 == 0 || num % 5 == 0)?console.log(`${num} is divisible by 3 or 5`):console.log("Something else.")

//Activity 4
console.log("")
console.log("Activity 4:")
num = 2;
(num % 3 == 0 && num % 5 == 0)?console.log("fizz buzz"):(num % 3 == 0)?console.log("fizz"):(num % 5 == 0)?console.log("buzz"):console.log(num)

//Activity 5
console.log("")
console.log("Activity 5:")
num = 1001;
let reverse = num.toString().split('').reverse().join('');
// console.log(reverse)
(num == reverse)?console.log(`${num} is a palindrome!`):console.log(`${num} is not a palindrome!`)

// Activity 6
console.log("")
console.log("Activity 6:")
let time = "21:00";
let placeOfWork = "Manchester";
let townOfHome = "Warrington";
switch(time){
    case "12:00":
        console.log(`The time is ${time}, and the employee is on their lunch. Please try again later.`);
        break;
    case "9:00":
        console.log(`The time is ${time}, and the employee is currently working in ${placeOfWork}.`);
        break;
    case "21:00":
        console.log(`The time is ${time}, and the employee is currently at home in ${townOfHome}.`);
        break;
    default:
        console.log(`The time is ${time}, and the employee is nowhere to be seen.`);
}

// Activity 7
console.log("")
console.log("Activity 7:")
let mumble = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`;
let lastA = mumble.lastIndexOf("a");
let lastE = mumble.lastIndexOf("e");
let lastI = mumble.lastIndexOf("i");
let lastO = mumble.lastIndexOf("o");
let lastU = mumble.lastIndexOf("u");
let vowelPositions = [];
vowelPositions.push(lastA);
vowelPositions.push(lastE);
vowelPositions.push(lastI);
vowelPositions.push(lastO);
vowelPositions.push(lastU);
console.log(vowelPositions.sort().reverse()[0])

// Activity 8
console.log("")
console.log("Activity 8:")
let word = "disastrous";
(word[0] == word[word.length-1])?console.log(true):console.log(false);

// Activity 9
console.log("")
console.log("Activity 9:")
let num1 = 1;
let num2 = 11;
((num1+num2)%2==0)?console.log(num1+num2):console.log(num1*num2);