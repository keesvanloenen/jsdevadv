function Toeslag(bedrag, jaar) {
  this.bedrag = bedrag;
  this.jaar = jaar;
}
Toeslag.prototype.printDetails = function() {
  console.log(`Bedrag: ${this.bedrag}, Jaar: ${this.jaar}`);
}

// ------------------------------------------------------

function ZorgToeslag(bedrag, jaar, zorgaanbieder) {
  Toeslag.call(this, bedrag, jaar);                       // stap 1: roep de parent constructor
  this.zorgAanbieder = zorgaanbieder;
}
ZorgToeslag.prototype = Object.create(Toeslag.prototype); // stap 2: nu erf ik alle props en methods
ZorgToeslag.prototype.constructor = ZorgToeslag;          
ZorgToeslag.prototype.printZorgAanbiederDetails = function() {
  console.log(`Zorgaanbieder: ${this.zorgAanbieder}`);
}

const toeslag = new Toeslag(34567.33, 2023);
toeslag.printDetails();

const zt1 = new ZorgToeslag(34567.33, 2024, 'Menzis');
zt1.printZorgAanbiederDetails();
