import {DefenseItem} from "../../structures/items/defense_item";

export class DarkDampener extends DefenseItem {
    constructor() {
        super("Dark Dampener", "Nullifies a Dark attack against all allies once for 1 turn", "dark", "null", true);
    }
}