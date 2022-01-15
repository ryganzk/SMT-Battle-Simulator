import {RecoveryItem} from "../../structures/items/recovery_item";

export class ChakraDrop extends RecoveryItem {
    constructor(amount) {
        super("Chakra Drop", "Slight set MP recovery to 1 ally", amount, "mp", 50, false);
    }
}