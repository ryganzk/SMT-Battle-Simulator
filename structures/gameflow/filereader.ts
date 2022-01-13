import * as fs from "fs";
import * as readline from "readline";

import {Player} from "../characters/player";
import {Demon} from "../characters/demon";
import {Compendium} from "../compendium/compendium";

export function readFile(fileName: string, maxLevel: number): Player {
    let compendium = new Compendium();
    let readPlayer = true;
    let player!: Player;

    let file = fs.readFileSync(fileName,
        {encoding:'utf8', flag:'r'});

    let readDemon = function(line: string): string {
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

    let readLevel = function(entity: Player | Demon, line: string): number {
        let reader = ''; let numString = ''
        for(let i = 0; i < line.length; i++) {
            if (line[i] === '|') {
                console.log(entity.name.toUpperCase(), "LEVEL SET TO", numString)
                let level = parseInt(numString)

                if(level > maxLevel) {
                    throw new Error(entity.name + "'S LEVEL CANNOT BE SET HIGHER THAN " + maxLevel)
                }

                entity.setLevel(level)
                return reader.length
            }
            else if (reader.toLowerCase() === 'level') {
                if(line[i] >= '0' && line[i] <= '9') {
                    numString = numString.concat(line.charAt(i))
                }
            }
            else {
                reader = reader.concat(line.charAt(i));
            }
        }
    }

    let readBonusStats = function(entity: Player | Demon, line: string): number {
        let stringLength = 0;
        let skillName = ''; let statValue = '';
        for(let i = 0; i < line.length; i++) {
            if (line[i] === '|') {
                break;
            }
            else if(line[i] >= '0' && line[i] <= '9') {
                statValue = statValue.concat(line.charAt(i));
            }
            else if(line[i] != ',') {
                skillName = skillName.concat(line.charAt(i));
            }
            else {
                entity.useStatPoints(skillName, parseInt(statValue));
                skillName = '';
                statValue = '';
            }
            stringLength++;
        }
        entity.useStatPoints(skillName, parseInt(statValue));
        return stringLength;
    }

    let readSkills = function(entity: Player | Demon, line: string): number {
        let stringLength = 0;
        let skillName = '';
        for(let i = 0; i < line.length; i++) {
            if (line[i] === '|') {
                break;
            }
            else if(line[i] != ',') {
                skillName = skillName.concat(line.charAt(i));
            }
            else {
                console.log(entity.getName().toUpperCase(), "LEARNED THE SKILL", skillName.toUpperCase());
                entity.addSkill(createSkill(skillName));
                skillName = '';
            }
            stringLength++;
        }
        console.log(entity.getName().toUpperCase(), "LEARNED THE SKILL", skillName.toUpperCase());
        entity.addSkill(createSkill(skillName));
        return stringLength;
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
            let playerName = readDemon(arr[i])
            player = new Player(playerName);
            arr[i] = reduceLine(arr[i]).substring(playerName.length + 1);
            console.log("PLAYER CREATED!");

            let reduceLength = readLevel(player, arr[i]);
            arr[i] = arr[i].substring(reduceLength + 2);
            console.log("REDUCED LINE:", arr[i]);

            reduceLength = readBonusStats(player, arr[i]);
            arr[i] = arr[i].substring(reduceLength + 1);
            console.log("REDUCED LINE:", arr[i]);

            reduceLength = readSkills(player, arr[i]);
            arr[i] = arr[i].substring(reduceLength + 1);
            console.log("REDUCED LINE:", arr[i]);

            let demName = readDemon(arr[i])
            player.setResistances(compendium.summonDemon(demName, maxLevel))
            arr[i] = arr[i].substring(demName.length + 1);
            console.log("REDUCED LINE:", arr[i]);

            demName = readDemon(arr[i]);
            player.setPotential(compendium.summonDemon(demName, maxLevel))
            readPlayer = false;
        }

        //Creates Demon object if line isn't empty or full of hyphens
        else if(arr[i].replace(/-|\s+/g, '') != '') {
            let demName = readDemon(arr[i])
            let demon = compendium.summonDemon(demName, maxLevel);
            player.addDemon(demon);
            console.log(demName.toUpperCase(), "DEMON CREATED! LIST CONTAINS", player.getDemonListLength(), "DEMONS!");

            arr[i] = reduceLine(arr[i]).substring(demName.length + 1);
            let reduceLength = readLevel(demon, arr[i]);
            arr[i] = arr[i].substring(reduceLength + 2);
            console.log("REDUCED LINE:", arr[i]);

            reduceLength = readBonusStats(demon, arr[i]);
            arr[i] = arr[i].substring(reduceLength + 1);
            console.log("REDUCED LINE:", arr[i]);

            readSkills(demon, arr[i]);
        }
    }

    return player;
}