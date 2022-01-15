import {DefenseItem} from "../../structures/items/defense_item";

export class FireDampener extends DefenseItem {
    constructor(amount) {
        super("Fire Dampener", "Nullifies a Fire attack against all allies once for 1 turn", amount, "fire", "null", true);
    }
}