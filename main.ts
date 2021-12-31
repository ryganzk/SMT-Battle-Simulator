import {readFile} from "./filereader";
import {Player} from "./player";

let player: Player; 

function mainMethod() {
    player = readFile("sampleteam.txt");
    console.log(player);
}

mainMethod();