import {Item} from "./item";

export class AttackItem extends Item {
    damage: number; accuracy: number; iKChance: number;
    description: string; type: string;
    multiTarget: boolean;

    constructor(name: string, description: string, type: string, damage: number, accuracy: number, ikChance: number, multiTarget: boolean){
        super(name);
        this.description = description;
        this.type = type;
        this.damage = damage;
        this.accuracy = accuracy;
        this.iKChance = ikChance;
        this.multiTarget = multiTarget;
    }
}