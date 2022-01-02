import {Demon} from "../../demon";
import {TypeResistances} from "../../type_resistances";

export class Preta extends Demon {
    constructor() {
        super("Preta", 40, 54, 8, 6, 6, 6, 5, new TypeResistances(1, 0, 1, 1, 0, 0, 2));
    }
}