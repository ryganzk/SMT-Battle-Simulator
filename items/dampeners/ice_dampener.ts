import {DefenseItem} from "../../structures/items/defense_item";

export class IceDampener extends DefenseItem {
    constructor() {
        super("Ice Dampener", "Nullifies an Ice attack against all allies once for 1 turn", "ice", "null", true);
    }
}