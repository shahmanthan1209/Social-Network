

// //value of variable which cannot change overtime = const
// //while "let" keyword has scope in surrounding scope

// if(true){
//     let name = "MSS";
//     //alert(name);
// }
// alert(name);

/*75
///printing the content
let fName = "Manthan ";
let lName = "Shah";
let age = prompt("Enter your age: ");

//old way
// let result = fName + ' ' + lName + ' ' + 'is ' + age + ' years old';
// alert(result);

let result = `${fName} ${lName} is ${age} years old.`; // Template strings
alert(result);
*/

/*
//76
function welcome(user = "Manthan Shah", message="Good Day!"){
    alert(`${user} ${message}`);
}
welcome();
//welcome("Manthan", "Good morning");
*/

// function greetings(message){
//     return alert(`${message} everyone`);
// }
// let greetings = message => {
//     alert(`${message} evryone`);
// }
// greetings("Good morning");

/*77
let createBlog = (title, body) => {
    if(!title){
        throw new Error("A title is required");
    }
    if(!body){
        throw new Error("Body can't beremain empty");
    }                               
    return `${title} ${body}`;  
}
createBlog("Blog title", "Blog body");
*/

//78
// let nepal = {
//     mountains: ['m1', 'm2', 'm3'],
//     printWithDash: function() {
//         setTimeout(() => console.log(this.mountains.join(" - ")), 3000);
//     }
// };
// nepal.printWithDash();

//79
// let thingsToDo = {
//     morning: "Exercise",
//     afternoon: "Work",
//     evening: "Code",
//     night: "Gym"
// };

// let {morning, afternoon} = thingsToDo;
// morning = 'Run';
// console.log(morning, ' - ', afternoon);

//80
// let uniStudent = student => {
//     let { name , university } =student;
//     console.log(`${name} from ${university}`);
// };

// uniStudent ({
//     name: "Manthan Shah",
//     university: "University of Windsor"
// });

//81
// let [, , mountains] = ["m1", "m2", "m3"];
//     console.log(mountains);



// var adventureClimbing = {
//     name: "Manthan",
//     height: 8848,
//     output: function(){
//         console.log(`Mr. ${this.name} is ${this.height} meter tall`);
//     }
// };
// adventureClimbing.output(); 

// //81
// var mountains = ['m1', 'm2'];
// var mountains2 = ['m3'];

// var result = [...mountains, ...mountains2];
// alert(result);

// var day = {
//     breakfast: 'toast',
//     lunch: 'rice'
// }
// var night = {
//     dinner: 'noodle soup'
// }

// var picnic = {...day, ...night};

// console.log(picnic);


// //rest
// var rivers =[ 'r1', 'r2'];
// var [first, ...rest] =rivers;
// console.log(first);

//82
//classes

//81..continue

// function Holiday(destination, days){
//     this.destination = destination,
//     this.days=days
// }

// Holiday.prototype.info =function(){
//     console.log(this.destination + " | " + this.days + "days");
// }

// var nepal = new Holiday("Nepal", 30);
// console.log(nepal.info());

//super class
class Holiday{
    constructor(destination, days){
        this.destination = destination,
        this.days = days
    }
    info(){
        console.log(`${this.destination} will take ${this.days}.`);
    }
}
// console.log(Holiday.prototype); //define as constructor

// const trip = new Holiday("Kathmandu, Nepal", 30);
// console.log(trip.info());

//sub class
class Expedition extends Holiday{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }
    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}
const tripWithGear= new Expedition("Everest", 30, ["rucksacks", "raincoat"]);
tripWithGear.info();