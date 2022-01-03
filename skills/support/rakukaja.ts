import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let rakukajaEffect = new SkillEffects('def', 'raise');

export class Rakukaja extends Skill {
    constructor() {
        super("Rakukaja", "Raises Defense of 1 ally by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [rakukajaEffect], false, false, false, '');
    }
}