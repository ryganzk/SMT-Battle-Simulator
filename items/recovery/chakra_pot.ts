import {RecoveryItem} from "../../structures/items/recovery_item";

export class ChakraPot extends RecoveryItem {
    constructor(amount) {
        super("Chakra Pot", "Moderate set MP recovery to 1 ally", amount, "mp", 200, false);
    }
}