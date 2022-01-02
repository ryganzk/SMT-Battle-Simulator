import {Demon} from "../../demon";
import {TypeResistances} from "../../type_resistances";
import {AilResistances} from "../../ail_resistances";

export class Pixie extends Demon {
    constructor() {
        super("Pixie", 32, 82, 2, 4, 7, 8, 6, new TypeResistances(1, 1, 1, 1, 2, 1, 0), new AilResistances(1, 1, 1, 0, 1, 1));
    }
}