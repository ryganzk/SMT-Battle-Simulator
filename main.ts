import {readFile} from "./filereader";
import {Player} from "./player";

let player: Player; 

function mainMethod() {
    player = readFile("player1team.txt");
    console.log(player);
}

mainMethod();