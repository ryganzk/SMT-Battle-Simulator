import {RecoveryItem} from "../../structures/items/recovery_item";

export class AmritaSoda extends RecoveryItem {
    constructor() {
        super("Amrita Soda", "Cures status ailments on 1 ally", "status", 1, false);
    }
}