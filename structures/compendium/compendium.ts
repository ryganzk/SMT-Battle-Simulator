import {Demon} from "../characters/demon";
import {DemonCompendium} from "./demoncompendium";
import {Skill} from "../skills/skill";
import {SkillCompendium} from "./skillcompendium";
import {Item} from "../items/item";
import {ItemCompendium} from "./itemcompendium";

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
             if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    }); 
}

export class Compendium implements DemonCompendium, SkillCompendium, ItemCompendium {
    getSkill!: (skillName: string) => Skill;
    summonDemon!: (demName: string, maxLevel: number) => Demon;
    giveItem!: (itemName: string) => Item;
}

applyMixins (Compendium, [DemonCompendium, SkillCompendium, ItemCompendium]);