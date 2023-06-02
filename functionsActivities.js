// Activity 1:
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));
  
//  Activity 2:
let orderCount  = 0;
const takeOrder = (topping, crust) => {
    console.log(`Order ${orderCount + 1}`)
    console.log(`${crust} pizza with ${topping}`);
    orderCount++;

}
takeOrder("pineapple", "Stuffed crust");
takeOrder("pepperoni", "Deep pan");
takeOrder("cheese", "Thin crust");

// Activity 3:
let myDetails = ["Pin number: 1234", "Balance: £200" ];
let enteredPin = "1234";
let withdrawAmount = 100;
function withdrawCash(amount, details){
    let balance = details[1].replace(/[^0-9]/g, '');
    (amount <= balance)?console.log(`You have withdrawn ${amount}. Don't spend it all at once!`):console.log(`Sorry you don't have ${amount} available in your account.`)
};
function wrongPin(){
    console.log('Sorry, you entered your PIN incorrectly, please try again.')
};
function transaction(enteredPin, withdrawAmount, myDetails){
("Pin number: " + enteredPin == myDetails[0])?withdrawCash(withdrawAmount, myDetails):wrongPin()
}
transaction(enteredPin, withdrawAmount, myDetails);
enteredPin = "1234";
withdrawAmount = "250";
transaction(enteredPin, withdrawAmount, myDetails);
enteredPin = "4321";
withdrawAmount = "150";
transaction(enteredPin, withdrawAmount, myDetails);