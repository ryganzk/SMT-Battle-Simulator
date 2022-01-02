import {Demon} from "../../demon";
import {TypeResistances} from "../../type_resistances";

export class Slime extends Demon {
    constructor() {
        super("Slime", 41, 40, 5, 6, 4, 3, 4, new TypeResistances(1, 0, 0, 0, 0, 0, 1));
    }
}