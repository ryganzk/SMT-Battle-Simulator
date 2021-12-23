export class Demon {
    name: string;
    hp: number; mp: number; str: number; vit: number; mag: number; agi: number; luc: number;

    constructor(name: string, hpAmt: number, mpAmt: number, strAmt: number, vitAmt: number, magAmt: number, agiAmt: number, lucAmt: number) {
        this.name = name;
        this.hp = hpAmt;
        this.mp = mpAmt;
        this.str = strAmt;
        this.vit = vitAmt;
        this.mag = magAmt;
        this.agi = agiAmt;
        this.luc = lucAmt;
    }

    getName(): string {
        return this.name;
    }

    getStat(stat: string): number {
        switch (stat.toLowerCase()) {
            case ("hp"):
                return this.hp;
            case ("mp"):
                return this.mp;
            case ("str"):
                return this.str;
            case ("vit"):
                return this.vit;
            case ("mag"):
                return this.mag;
            case ("agi"):
                return this.agi;
            case ("luc"):
                return this.luc;
            default:
                return 0;
        }
    }

    setStat(stat: string, newStat: number) {
        switch (stat.toLowerCase()) {
            case ("hp"):
                this.hp = newStat;
            case ("mp"):
                this.mp = newStat;
            case ("str"):
                this.str = newStat;
            case ("vit"):
                this.vit = newStat;
            case ("mag"):
                this.mag = newStat;
            case ("agi"):
                this.agi = newStat;
            case ("luc"):
                this.luc = newStat;
        }
    }
}