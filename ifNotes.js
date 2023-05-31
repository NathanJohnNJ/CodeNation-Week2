// let weather = "snow";

// if (weather=="sunny"){
//     console.log("Better wear some sunscreen");
// } else if (weather=="rainy"){
//     console.log("Bring a brolly");
// } else if (weather=="snow"){
//     console.log("Put some gloves on");
// } else {
//     console.log("It could go either way");
// };

//console.log(weather=="snow") >> true

let car = "GM";

switch(car){
    case "Ford":
    case "GM":
        console.log("You've got an American car");
        break;
    case "Peugeot":
    case "Citroen":
        console.log("You've got a French car");
        break;
    default:
        console.log("Do you even have a car?");
}