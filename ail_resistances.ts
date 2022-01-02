export class AilResistances {
    seal: number; chrm: number; slp: number; cnfs: number; psn: number; mrg: number;

    //Weak: 0
    //Neutral: 1
    //Resist: 2
    //Null: 3

    constructor(seal: number, chrm: number, slp: number, cnfs: number, psn: number, mrg: number) {
        this.seal = seal;
        this.chrm = chrm;
        this.slp = slp;
        this.cnfs = cnfs;
        this.psn = psn;
        this.mrg = mrg;
    }
}