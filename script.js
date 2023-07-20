prompt("Open the console pressing shift + I + n on your keyboard \n and Press Ok here");
prompt("Read The console");
console.log("Welcome to The game......\n I guess u have Successfully Opened up The console \n Well it is one of my first Codes So tell me how it is\n So lets get started, Shall we??")
console.log("Enter Your Number")


let winningNumber = 19;
let userGuess = Number(prompt("Enter Your guessing Number "));

if (userGuess === winningNumber) {
    console.log("You Won. Congrats Dude!! ");
} else if(userGuess !== winningNumber & userGuess > 42){
    console.log("You are very wrong");
}else if(userGuess !== winningNumber & userGuess < 7 ){
    console.log("You might be close");
}else if (userGuess <= 18 ){
    console.log("You are Close just a little higher");
}else if (userGuess =>20){
    console.log("You are close just a little lower")
}else if (userGuess => 100){
    console.log("its a two digit number");
}else {
    console.log("Wrong");
}

if (userGuess!==winningNumber){
    console.log("You are wrong or close reload the Site ");
}

