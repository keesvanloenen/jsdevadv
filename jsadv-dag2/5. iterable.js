// const myMusic = {
//   cds: ['So What', 'Amandla', 'Tutu'],
//   lps: ['Milestones'],
//   *[Symbol.iterator]() {
//     // for (const title of [...this.cds, ...this.lps]) {
//     //   yield title;
//     // }
//     yield* [...this.cds, ...this.lps];
//   }
// };

// for (const title of myMusic) {
//   console.log(title);
// }

const myMusic = {
  cd: ['So What', 'Amandla', 'Tutu'],
  lp: ['Milestones'],
  cassette: ['Bitches brew'],
  hoogte: 10,
  *[Symbol.iterator]() {
    for (const prop in myMusic) {
      if (Array.isArray(myMusic[prop])) {
        yield* myMusic[prop];
      }
    }
  },
  *filter(cb) {
    for (const title of this) {
      if (cb(title)) {
        yield title;
      }
    }
  },
};

const myFilter = (elem) => elem.startsWith('A');
const myFilter2 = (elem) => elem.length > 9;

for (const title of myMusic.filter(myFilter2)) {
  console.log(title);
}