class Toeslag {
  #bedrag;
  constructor(bedrag, jaar) {
    if (new.target == Toeslag) {
      throw new Error('Toeslag graag niet instantiëren');
    }
    this.#bedrag = bedrag;
    this.jaar = jaar;
  }

  get bedrag() {
    return this.#bedrag;
  }

  // set bedrag(newBedrag) {
  //   this.#bedrag = newBedrag;
  // }

  printDetails() {
    console.log(`Bedrag: ${this.#bedrag}, Jaar: ${this.jaar}`);
  }
}

class ZorgToeslag extends Toeslag {
  static instanceCount = 0;

  constructor(bedrag, jaar, zorgaanbieder) {
    super(bedrag, jaar);
    this.zorgAanbieder = zorgaanbieder;
    ZorgToeslag.instanceCount++;
  }

  static get instanceCount() {
    return ZorgToeslag.instanceCount;
  }
  printZorgAanbiederDetails() {
    console.log(`Zorgaanbieder: ${this.zorgAanbieder}`);
  }
}

// const toeslag = new Toeslag(34567.33, 2023);
// toeslag.printDetails();

const zt1 = new ZorgToeslag(34567.33, 2024, 'Menzis');
const zt2 = new ZorgToeslag(34567.33, 2024, 'PGGM');
zt1.printZorgAanbiederDetails();
console.log(zt1.bedrag);
console.log(ZorgToeslag.instanceCount);

console.log(typeof Toeslag)