"use strict";

// default binding

function chat() {
  console.log('aan het chatten');
  console.log(this.nr?.lengte);
}

const klant = {
  plaats: 'Urk',
  chat: chat,
  adres: {
    straat: 'A Straat',
    nummer: 58,
    chat: chat,
  },
  startJaar: 2019,
  telefoneer: function() {
    console.log('aan het telefoneren');
    console.log(this);
  }
}

// chat();     // default binding
// klant.telefoneer();   // implicit binding 
// klant.chat();
// klant.adres.chat();

// ------------------------------------

// Implicit binding (links van de punt)
// const mijnFunctie = klant.telefoneer;
// mijnFunctie();

const medewerker = {
  naam: 'Bert',
  aantalHuisdieren: 2,
  toon() {
    // function functieInFunctie() {
    //   console.log(this);
    //   console.log(`Naam: ${this?.naam}`);
    // }
    const functieInFunctie = () => {        // lambda gebruikt this van zijn parent
        console.log(this);
        console.log(`Naam: ${this?.naam}`);
      }
    functieInFunctie();   // globalThis.functieInFunctie()
  }
}

// medewerker.toon();

// --------------------------------------------------------------

// 3. Explicit binding: call(), apply(), bind()

const offerte = {
  artikel: 'Samsung S24',
  prijs: 1100.00,
  handyPrint(teken, aantal) {
    console.log(`${teken.repeat(aantal)} ${this.artikel} (${this.prijs})`);
  }
}

offerte.handyPrint('*', 5);

// --------------------------------------------------

const winkelwagentje = {
  artikel: 'Bananen',
  prijs: 2.40,
}

offerte.handyPrint.call(winkelwagentje, '#', 3);
offerte.handyPrint.apply(winkelwagentje, ['#', 3]);

let nieuweHandyPrint = offerte.handyPrint.bind(winkelwagentje);
nieuweHandyPrint('-', 10);


// ----------------------------------------------------------------

// 4. met constructor
function Paspoort(achternaam, plaats) {
  this.achternaam = achternaam;
  this.plaats = plaats;
}

let p1 = new Paspoort('Joop', 'Ede');
console.log(p1);
