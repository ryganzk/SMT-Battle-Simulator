import * as fs from "fs";
import * as readline from "readline";

import {Player} from "./player";
import {Demon} from "./demon";
import {Compendium} from "./compendium";

export function readFile(fileName: string): Player {
    let compendium = new Compendium();
    let readPlayer = true;
    let player!: Player;

    let file = fs.readFileSync(fileName,
        {encoding:'utf8', flag:'r'});

    let readPart = function(line: string): string {
        let name = '';
        for(let i = 0; i < line.length; i++)
        {
            if (line[i] != '|')
                name = name.concat(line.charAt(i));
            else {
                break;
            }
        }
        return name.replace(/ /g,'');
    }

    let readSkills = function(entity: Player | Demon, line: string) {
        let skillName = '';
        for(let i = 0; i < line.length; i++) {
            if(line[i] != ',') {
                skillName = skillName.concat(line.charAt(i));
            }
            else {
                console.log(entity.getName().toUpperCase(), "LEARNED THE SKILL", skillName.toUpperCase());
                entity.addSkill(createSkill(skillName));
                skillName = '';
            }
        }
        console.log(entity.getName().toUpperCase(), "LEARNED THE SKILL", skillName.toUpperCase());
        entity.addSkill(createSkill(skillName));
    }

    let createSkill = function(skillName: string) {
        let skill = compendium.getSkill(skillName);
        return skill;
    }

    let reduceLine = function(line: string) {
        return line.replace(/ /g,'');
    }

    let arr = file.split("\r\n");
    for(let i = 0; i < arr.length; i++)
    {
        if(readPlayer) {
            let playerName = readPart(arr[i])
            player = new Player(playerName);
            arr[i] = reduceLine(arr[i]).substring(playerName.length + 1);
            console.log("PLAYER CREATED!");
            console.log("REDUCED LINE:", arr[i]);
            readSkills(player, arr[i]);
            readPlayer = false;
        }

        //Creates Demon object if line isn't empty or full of hyphens
        else if(arr[i].replace(/-|\s+/g, '') != '') {
            let demName = readPart(arr[i])
            let demon = compendium.summonDemon(demName);
            player.addDemon(demon);
            console.log(demName.toUpperCase(), "DEMON CREATED! LIST CONTAINS", player.getDemonListLength(), "DEMONS!");
            arr[i] = reduceLine(arr[i]).substring(demName.length + 1);
            readSkills(demon, arr[i]);
        }
    }

    return player;
}