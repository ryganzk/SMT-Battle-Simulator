import {DefenseItem} from "../../structures/items/defense_item";

export class ForceDampener extends DefenseItem {
    constructor() {
        super("Force Dampener", "Nullifies a Force attack against all allies once for 1 turn", "force", "null", true);
    }
}