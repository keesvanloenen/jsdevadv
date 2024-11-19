function telOp(...nrs) {
  // let result = 0;
  // for(const nr of nrs) {
  //   result += nr;
  // }
  // return result;

  // via de array method reduce()
  return nrs.reduce((acc, currentValue) => acc + currentValue, 0);
}

function telOpOUD() {
  let result = 0;
  for(const nr of arguments) {
    result += nr;
  }
  return result;
}

const result = telOp(1,2,3);
console.log(result);

const resultOUD = telOpOUD(1,2,3);
console.log(resultOUD);

// -----------------------------------------------------------------
// Andere array methods

const subsidies = ['woon', 'kinder', 'muziekles'];

subsidies.forEach((elem, index) => {
  console.log(`(${index}) ${elem}`)
});

const formattedSubsidies = subsidies.map((elem, index) => elem.toUpperCase() + '!');
console.log(formattedSubsidies);

