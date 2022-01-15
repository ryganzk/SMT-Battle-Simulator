import {RecoveryItem} from "../../structures/items/recovery_item";

export class AmritaSoda extends RecoveryItem {
    constructor(amount) {
        super("Amrita Soda", "Cures status ailments on 1 ally", amount, "status", 1, false);
    }
}