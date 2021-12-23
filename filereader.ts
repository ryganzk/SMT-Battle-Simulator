import * as fs from "fs";
import * as readline from "readline";

import {Player} from "./player";
import {Compendium} from "./demons/demoncompendium";

export function readFile(fileName: string): Player {
    let compendium = new Compendium();
    let readPlayer = true;
    let player = new Player('');

    const file = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout,
        terminal: false
    });

    function readName(line: string): string {
        let name = '';
        for(let i = 0; i < line.length; i++)
        {
            if (line[i] != ' ' && line[i] != '|')
                name = name.concat(line.charAt(i));
            else {
                break;
            }
        }
        return name;
    }

    file.on('line', (line) => {
        //Creates Player object from the first line of the text document
        if(readPlayer) {
            player = new Player(readName(line));
            console.log("PLAYER CREATED!");
            readPlayer = false;
        }

        //Creates Demon object if line isn't empty or full of hyphens
        else if(line.replace(/-|\s+/g, '') != '') {
            let demon = readName(line);
            console.log(demon.toUpperCase() + " DEMON CREATED!");
            player.addDemon(compendium.summonDemon(demon));
        }
    });

    return player;
}