import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let poismaEffect = new SkillEffects('poison', 'inflict');

export class Poisma extends Skill {
    constructor() {
        super("Poisma", "Chance of inflicting Poison to 1 foe", "Ailm", 10, [], 70, 0, [], [poismaEffect], false, false, false, '');
    }
}