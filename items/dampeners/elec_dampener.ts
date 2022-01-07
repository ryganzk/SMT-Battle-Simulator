import {DefenseItem} from "../../structures/items/defense_item";

export class ElecDampener extends DefenseItem {
    constructor() {
        super("Elec Dampener", "Nullifies an Electric attack against all allies once for 1 turn", "elec", "null", true);
    }
}