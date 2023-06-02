// let alarm = '';
// let day = 'Saturday'; 
// let weekdayAlarm = "get up at 7am" ;
// let weekendAlarm = "no alarm needed";

// (day == "Saturday" || day == "Sunday")?alarm = weekendAlarm: alarm = weekdayAlarm
// console.log(alarm)

// const person = {
//     name: "Nathan",
//     age: "31",
//     favSongs: ["Flawless(Remix) - Beyonce Ft. Nicki Minaj", "Press - Cardi B", "GODDESS - Sasha Colby"]
// }
// for(let i=0; i<person.favSongs.length; i++){
//     console.log(person.favSongs[i])
// }

// // Object
// const pet = {
//     petName: "Kitty",
//     petType: "Cat",
//     petAge: 4,
//     petBreed: "Egyptian",
//     petColour: "Baige",
//     lastFed: "08:00",
//     feedPet (time) {
//         this.lastFed = time;
//         return `${this.petName} has now been fed. New feed time updated to ${time}`;
//     },
//     checkLastFeedTime(){
//         return this.lastFed;
//     }
// }
// console.log(pet.checkLastFeedTime());
// console.log(pet.feedPet("14:00"));
// console.log(pet.checkLastFeedTime());
// Class which is a template to be used
class pet {
    constructor(name, type){
        this.petName = name;
        this.petType = type;
    }
    outputPetInfo(){
        return `Name ${this.petName}\nType ${this.petType}`;
    }
}

let domino = new pet("Domino", "Dog");
let zeus = new pet("Zeus", "dog");
console.log(domino.outputPetInfo());