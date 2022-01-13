import {Skill} from "./skill";
import {SkillEffects} from "./skill_effects";

export class AttackSkill extends Skill {
    type: string;
    damage: number[]; accuracy: number; critBonus: number; iKChance: number;
    strBased: boolean;
    numHits: number[];
    effects: SkillEffects[];

    constructor(name: string, description: string, type: string, mpCost: number, target: string, damage: number[], accuracy: number, critBonus: number, iKChance: number, numHits: number[], effects: SkillEffects[], strBased: boolean, unique: string) {
        super(name, description, mpCost, target, unique)
        this.type = type;
        this.damage = damage;
        this.accuracy = accuracy;
        this.critBonus = critBonus;
        this.iKChance = iKChance;
        this.numHits = numHits;
        this.effects = effects;
        this.strBased = strBased;
        this.unique = unique;
    }
}