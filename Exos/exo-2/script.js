
const register = false;//variable de type boolean
const age = 12;
let raceNumber = Math.floor(Math.random()*1000);

if (register === false){
    raceNumber += 1000;
}

if (age > 18 && register === true){
    console.log('You will race at 9:30 am, your race Number is : ' +  raceNumber)
}else if (age > 18 || register === true){
    console.log('You will race at 11:00 am ' + raceNumber)
}else if(age < 18 || register === false){
    console.log('You will race at 12:30 pm ' + raceNumber)
}else{
    console.log('Go to see the registration desk');
}

console.log('exo-2');