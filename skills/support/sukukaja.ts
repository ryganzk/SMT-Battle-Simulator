import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let sukukajaEffect = new SkillEffects('spd', 'raise');

export class Sukukaja extends Skill {
    constructor() {
        super("Sukukaja", "Raises Accuracy/Evasion of 1 ally by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [sukukajaEffect], false, false, false, '');
    }
}