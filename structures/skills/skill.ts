import {SkillEffects} from "./skill_effects";

export class Skill {
    name: string; description: string; target: string; unique!: string;
    mpCost: number;

    constructor(name: string, description: string, mpCost: number, target: string, unique: string) {
        this.name = name;
        this.description = description;
        this.mpCost = mpCost;
        this.target = target;
        this.unique = unique
    }
}