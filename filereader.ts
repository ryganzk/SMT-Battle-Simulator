import * as fs from "fs";
import * as readline from "readline";

import {Player} from "./player";
import {Compendium} from "./demons/demoncompendium";

export function readFile(fileName: string): Player {
    let compendium = new Compendium();
    let readPlayer = true;
    let player!: Player;

    let file = fs.readFileSync(fileName,
        {encoding:'utf8', flag:'r'});

    let readName = function(line: string): string {
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

    let arr = file.split("\r\n");
    for(let i = 0; i < arr.length; i++)
    {
        if(readPlayer) {
            player = new Player(readName(arr[i]));
            console.log("PLAYER CREATED!");
            readPlayer = false;
        }

        //Creates Demon object if line isn't empty or full of hyphens
        else if(arr[i].replace(/-|\s+/g, '') != '') {
            let demon = readName(arr[i]);
            player.addDemon(compendium.summonDemon(demon));
            console.log(demon.toUpperCase() + " DEMON CREATED! LIST CONTAINS " + player.getDemonListLength() + " DEMONS!");
        }
    }

    return player;
}