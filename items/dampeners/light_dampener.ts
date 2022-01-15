import {DefenseItem} from "../../structures/items/defense_item";

export class LightDampener extends DefenseItem {
    constructor(amount) {
        super("Light Dampener", "Nullifies a Light attack against all allies once for 1 turn", amount, "light", "null", true);
    }
}