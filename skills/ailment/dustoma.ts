import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let dustomaEffect = new SkillEffects('mirage', 'inflict');

export class Dustoma extends Skill {
    constructor() {
        super("Dustoma", "Chance of inflicting Mirage to 1 foe", "Ailm", 10, [], 70, 0, [], [dustomaEffect], false, false, false, '');
    }
}