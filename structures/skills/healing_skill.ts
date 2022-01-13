import {Skill} from "./skill";
import {SkillEffects} from "./skill_effects";

export class HealingSkill extends Skill {
    effects: SkillEffects[];

    constructor(name: string, description: string, mpCost: number, target: string, effects: SkillEffects[], unique: string) {
        super(name, description, mpCost, target, unique)
        this.effects = effects;
    }
}