import { Demon } from "./demon";
import {DemonCompendium} from "./demons/demoncompendium";
import { Skill } from "./skill";
import {SkillCompendium} from "./skills/skillcompendium";

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
             if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    }); 
}

export class Compendium implements DemonCompendium, SkillCompendium{
    getSkill!: (skillName: string) => Skill;
    summonDemon!: (demName: string) => Demon;

}
applyMixins (Compendium, [DemonCompendium, SkillCompendium]);