import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let sukukajaEffect = new SkillEffects('spd', 'raise');

export class Sukukaja extends Skill {
    constructor() {
        super("Sukukaja", "Raises Accuracy/Evasion of 1 ally by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [sukukajaEffect], false, false, false, null);
    }
}