import {DefenseItem} from "../../structures/items/defense_item";

export class PhysDampener extends DefenseItem {
    constructor(amount) {
        super("Phys Dampener", "Nullifies a Physical attack against all allies once for 1 turn", amount, "phys", "null", true);
    }
}