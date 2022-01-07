import {DefenseItem} from "../../structures/items/defense_item";

export class FireDampener extends DefenseItem {
    constructor() {
        super("Fire Dampener", "Nullifies a Fire attack against all allies once for 1 turn", "fire", "null", true);
    }
}