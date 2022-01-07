import {DefenseItem} from "../../structures/items/defense_item";

export class PhysDampener extends DefenseItem {
    constructor() {
        super("Phys Dampener", "Nullifies a Physical attack against all allies once for 1 turn", "phys", "null", true);
    }
}