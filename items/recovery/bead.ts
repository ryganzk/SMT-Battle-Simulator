import {RecoveryItem} from "../../structures/items/recovery_item";

export class Bead extends RecoveryItem {
    constructor() {
        super("Bead", "Full HP recovery to 1 ally", "hp", 999, false);
    }
}