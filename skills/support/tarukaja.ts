import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let tarukajaEffect = new SkillEffects('atk', 'raise');

export class Tarukaja extends Skill {
    constructor() {
        super("Tarukaja", "Raises Attack of 1 ally by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [tarukajaEffect], false, false, false, '');
    }
}