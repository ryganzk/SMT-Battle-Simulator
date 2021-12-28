import {SkillEffects} from "./skill_effects";

export class Skill {
    name: string; description: string; type: string; unique: string;
    mpCost: number; damage: number[]; accuracy: number; iKChance: number;
    multiTarget: boolean; randomTargets: boolean; strBased: boolean;
    numHits: number[];
    effects: SkillEffects[];

    constructor(name: string, description: string, type: string, mpCost: number, damage: number[], accuracy: number, iKChance: number, numHits: number[], effects: SkillEffects[], strBased: boolean, multiTarget: boolean, randomTargets: boolean, unique: string) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.mpCost = mpCost;
        this.damage = damage;
        this.accuracy = accuracy;
        this.iKChance = iKChance;
        this.numHits = numHits;
        this.effects = effects;
        this.strBased = strBased;
        this.multiTarget = multiTarget;
        this.randomTargets = randomTargets;
        this.unique = unique;
    }
}