import {readFile} from "./filereader";
import {Player} from "./player";

let player1: Player; 

function mainMethod() {
    playerFunc();
    logToConsole("PLAYER 1 IS " + player1.getName());
}

function playerFunc() {
    player1 = readFile("player1team.txt");

    if(player1 instanceof Player) {
        for(let i = 0; i < player1.getDemonListLength(); i++) {
            console.log(player1.getDemonName(i));
        }
    }
}

function logToConsole(thing: string) {
    console.log(thing);
}
    //let player2 = readFile("player2team.txt");

    
    //console.log("PLAYER 2 IS " + player2.getName());

mainMethod();