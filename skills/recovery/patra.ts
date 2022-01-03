import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let patraEffect = new SkillEffects('ailment', 'remove');

export class Patra extends Skill {
    constructor() {
        super("Patra", "Cures status ailments on 1 ally", "Recv", 8, [], 0, 0, [], [patraEffect], false, false, false, '');
    }
}