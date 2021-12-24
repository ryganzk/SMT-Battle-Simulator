import {readFile} from "./filereader";
import {Player} from "./player";

let player1: Player; 

function mainMethod() {
    playerPromise.then(val => console.log(val));
}

const playerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        player1 = readFile("player1team.txt");
        resolve(player1);
    }, 300);
});
    //let player2 = readFile("player2team.txt");

    
    //console.log("PLAYER 2 IS " + player2.getName());

mainMethod();