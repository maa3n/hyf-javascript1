//-----1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//-------------------
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
//-------------------
let myString = "hello,this,is,a,difficult,to,read,sentence";
myString = myString.replace(/,/g, " ");
console.log(myString);
//-------------------

//------2. Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
//--------------------
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals);
//--------------------
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The array has a length of: " + favoriteAnimals.length);
//--------------------
let favoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'];
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
//--------------------
let favoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'turtle'];
let x = favoriteAnimals.indexOf("meerkat");
console.log('The item you are looking for is at index: ' + x);
//--------------------

//---More JavaScript 
function sumFunction(a, s, d) {
    return a + s + d;
}
//---------------------
function colorCar(color) {
    return "a " + color + " car";
}
console.log(colorCar("red"));
//----------------------
function info(name, age) {
    this.name = name;
    this.age = age;
}
let maen = new info("Maen", 29);

console.log("My name is " + maen.name + " I\'m " + maen.age + " years old");
//----------------------
function vehicleType(color, code) {
    if (code === 1) {
        return "a " + color + " car";
    } else if (code === 2) {
        return "a " + color + " motorbike";
    }
}
console.log(vehicleType("blue", 2));
//------------------------

3 === 3 ? console.log("yes") : console.log("No");
//------------------------
function vehicle(color, code, age) {
    if (code === 1 && age >= 1) {
        return "a " + color + " used car";
    } else if (code === 2) {
        return "a " + color + " motorbike";
    }
}
console.log(vehicle("blue", 1, 5));
//-------------------------
let listOfVehicle = ["motorbike", "caravan", "bike", "truck"]
console.log(listOfVehicle[2]);
//-------------------------
let listOfVehicle = ["motorbike", "caravan", "bike", "truck"]

function vehicle(color, code, age) {
    if (code === 1 && age >= 1) {
        return "a " + color + " used car" + listOfVehicle[3];
    } else if (code === 2) {
        return "a " + color + " bike";
    } else if (code === 3 && age <= 1) {
        return "a " + color + " new " + listOfVehicle[2];
    }
}
console.log(vehicle("green", 3, 1));
//-------------------------
let listOfVehicle = ["car", "motorbike", "caravan", "bike"]
let x = "";
for (i = 0; i < (listOfVehicle.length - 1); i++) {
    x += listOfVehicle[i] + "s, ";
}
for (i = 3; i < listOfVehicle.length; i += 1) {
    x += "and " + listOfVehicle[i] + "s.";
}
console.log("Amazing Joe's Garage, we service " + x);
//-------------------------
listOfVehicle.push("truck");
console.log(listOfVehicle);
//-------------------------
let myEmpty = {};
//-------------------------
let myTeachers = { Node: "Rogier", JS: "Mauro", CSS: "Philipe" };
//-------------------------
let ourTeachers = {
    names : ['Arco', 'Rogier', 'Philipp'],
    languages : ['HTML', 'CSS', 'JavaScript'],
    info : function(){
      return "Teachers: " + this.names +". The languages: "+ this.languages;
    }
}
console.log (ourTeachers.info());
//---------------------------

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;


console.log(x==y);      // false
console.log(x===y);     // false
console.log(z == y);    // true
console.log(z==x);      //false

