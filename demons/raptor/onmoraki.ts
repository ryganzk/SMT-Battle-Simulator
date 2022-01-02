import {Demon} from "../../demon";
import {TypeResistances} from "../../type_resistances";
import {AilResistances} from "../../ail_resistances";

export class Onmoraki extends Demon {
    constructor() {
        super("Onmoraki", 42, 59, 5, 8, 8, 7, 6, new TypeResistances(1, 2, 0, 1, 0, 1, 1), new AilResistances(1, 1, 1, 1, 1, 0));
    }
}