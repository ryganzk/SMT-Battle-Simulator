import {Item} from "./item";

export class RecoveryItem extends Item {
    description: string; type: string;
    healAmount: number;
    multiTarget: boolean;

    constructor(name: string, description: string, amount: number, type: string, healAmount: number, multiTarget: boolean){
        super(name, amount);
        this.description = description;
        this.type = type;
        this.healAmount = healAmount;
        this.multiTarget = multiTarget;
    }
}