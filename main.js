let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = true;
var age = 34;

let racer = (name)=> {
if (registeredEarly === true && age > 18){
    raceNumber = raceNumber + 1000;
}
if (raceNumber > 1000) {
    console.log(`Early Registered Adult, ${raceNumber}, race at 9:30am!`)
} else if (raceNumber <= 1000 && age > 18){
    console.log(`${raceNumber}. Late adults run at 11:00 am.`)
} else if (age < 18){
    console.log(`${raceNumber}. Youth registrants run at 12:30pm (regardless of registration)`)
} else {console.log(`${raceNumber}. Please see registration desk for your race start time!`)}
};
console.log(racer('Justin'));

