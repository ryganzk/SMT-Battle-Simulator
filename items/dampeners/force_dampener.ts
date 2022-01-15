import {DefenseItem} from "../../structures/items/defense_item";

export class ForceDampener extends DefenseItem {
    constructor(amount) {
        super("Force Dampener", "Nullifies a Force attack against all allies once for 1 turn", amount, "force", "null", true);
    }
}