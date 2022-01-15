import {RecoveryItem} from "../../structures/items/recovery_item";

export class Bead extends RecoveryItem {
    constructor(amount) {
        super("Bead", "Full HP recovery to 1 ally", amount, "hp", 999, false);
    }
}