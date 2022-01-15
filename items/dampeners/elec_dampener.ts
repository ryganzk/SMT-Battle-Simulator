import {DefenseItem} from "../../structures/items/defense_item";

export class ElecDampener extends DefenseItem {
    constructor(amount) {
        super("Elec Dampener", "Nullifies an Electric attack against all allies once for 1 turn", amount, "elec", "null", true);
    }
}