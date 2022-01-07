import {Item} from "./item";

export class RecoveryItem extends Item {
    description: string; type: string;
    amount: number;
    multiTarget: boolean;

    constructor(name: string, description: string, type: string, amount: number, multiTarget: boolean){
        super(name);
        this.description = description;
        this.type = type;
        this.amount = amount;
        this.multiTarget = multiTarget;
    }
}