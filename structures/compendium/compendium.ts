import {Demon} from "../characters/demon";
import {DemonCompendium} from "./demoncompendium";
import {Skill} from "../skills/skill";
import {SkillCompendium} from "./skillcompendium";

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