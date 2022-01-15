import {SkillEffects} from "../skills/skill_effects";

export class Item {
    name: string
    amount: number

    constructor(name: string, amount: number) {
        this.name = name
        this.amount = amount
    }
}